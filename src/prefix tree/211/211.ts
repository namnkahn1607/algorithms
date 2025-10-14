/* 211. add and search word data structure */
// @: trie
import { WordDict } from "./run";
import { TrieNode } from "../trie";

class WordDictionary extends WordDict {
    addWord(word: string): void {
        let cur: TrieNode = this.root;

        for (const c of word) {
            if (!cur.children.has(c))
                cur.children.set(c, new TrieNode());

            cur = cur.children.get(c)!;
        }

        cur.terminal = true;
    }

    search(word: string): boolean {
        const searchFrom = (cur: TrieNode, start: number): boolean => {
            for (let i = start; i < word.length; ++i) {
                const c = word[i];

                if (c === '.') {
                    for (const child of cur.children.values()) {
                        if (searchFrom(child, i + 1))
                            return true;
                    }

                    return false;

                } else if (!cur.children.has(c))
                    return false;

                cur = cur.children.get(c)!
            }

            return cur.terminal;
        };

        return searchFrom(this.root, 0);
    }
}

WordDictionary.run(new WordDictionary());