/* 211a. add and search word data structure */
// @: trie
import { TrieNode } from "../trie";

class WordDictionary {
    constructor(
        protected root = new TrieNode()
    ) {}

    addWord(word: string): void {
        let curr: TrieNode = this.root;

        for (const c of word) {
            if (!curr.children.has(c))
                curr.children.set(c, new TrieNode());

            curr = curr.children.get(c)!;
        }

        curr.terminal = true;
    }

    search(word: string): boolean {
        const searchFrom = (curr: TrieNode, start: number): boolean => {
            for (let i = start; i < word.length; ++i) {
                const c = word[i];

                if (c === '.') {
                    for (const child of curr.children.values()) {
                        if (searchFrom(child, i + 1))
                            return true;
                    }

                    return false;

                } else if (!curr.children.has(c))
                    return false;

                curr = curr.children.get(c)!
            }

            return curr.terminal;
        };

        return searchFrom(this.root, 0);
    }
}

export { WordDictionary };