/* data structures: Prefix Tree */

class TrieNode {
    constructor(
        public children = new Map<string, TrieNode>(),
        public terminal: boolean = false
    ) {}
}

class Trie {
    constructor(
        protected root = new TrieNode()
    ) {}

    insert(word: string): void {
        let curr: TrieNode = this.root;

        for (const c of word) {
            if (!curr.children.has(c))
                curr.children.set(c, new TrieNode());

            curr = curr.children.get(c)!;
        }

        curr.terminal = true;
    }

    search(word: string, allowPrefix: boolean = false): boolean {
        let curr: TrieNode = this.root;

        for (const c of word) {
            if (!curr.children.has(c))
                return false;

            curr = curr.children.get(c)!;
        }

        if (allowPrefix)
            return true;
        
        return curr.terminal;
    }
}

export { TrieNode, Trie };