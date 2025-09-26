/* data structures: Prefix Tree */

export class TrieNode {
    constructor(
        public children = new Map<string, TrieNode>(),
        public terminal: boolean = false
    ) {}
}

export class Trie {
    constructor(
        protected root = new TrieNode()
    ) {}

    insert(word: string): void {
        let cur: TrieNode = this.root;

        for (const c of word) {
            if (!cur.children.has(c))
                cur.children.set(c, new TrieNode());

            cur = cur.children.get(c)!;
        }

        cur.terminal = true;
    }

    search(word: string, allowPrefix: boolean = false): boolean {
        let cur: TrieNode = this.root;

        for (const c of word) {
            if (!cur.children.has(c))
                return false;

            cur = cur.children.get(c)!;
        }

        if (allowPrefix)
            return true;
        
        return cur.terminal;
    }
}