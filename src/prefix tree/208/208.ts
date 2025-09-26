/* 208. implement prefix tree */
// @: trie
import { _PrefixTree } from "./main";
import { Trie } from "../trie";

class PrefixTree extends _PrefixTree {
    constructor(private trie = new Trie()) {
        super();
    }

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

PrefixTree.run(new PrefixTree());