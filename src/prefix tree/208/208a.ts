/* 208a. implement prefix tree */
// @: trie
import { Trie } from "../trie";

class PrefixTree {
    constructor(private trie = new Trie()) {}

    insert(word: string): void {
        this.trie.insert(word);
    }

    search(word: string): boolean {
        return this.trie.search(word, false);
    }

    startsWith(prefix: string): boolean {
        return this.trie.search(prefix, true);
    }
}

export { PrefixTree };