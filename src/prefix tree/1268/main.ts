/* 1268. search suggestion system */

import { Trie, TrieNode } from "../trie";

abstract class SearchSuggestion {
    abstract suggestedProducts(products: string[], searchWord: string): string[][];

    public static run(sol: SearchSuggestion): void {
        const products: string[] = [
            "mobile", "mouse", "moneypot", "monitor", "mousepad"
        ];

        const searchWord: string = "mouse";

        console.log(sol.suggestedProducts(products, searchWord).map(
            val => val.join(" ")
        ).join(" "));
    }
}

class PrefixTree extends Trie {
    firstKWithPrefix(prefix: string, k: number): string[] {
        let curr: TrieNode = this.root;

        for (const c of prefix) {
            if (!curr.children.has(c))
                return [];

            curr = curr.children.get(c)!;
        }

        const ans: string[] = [];

        const dfs = function(node: TrieNode, word: string): void {
            if (ans.length === k) return;

            if (node.terminal) {
                ans.push(prefix + word);

                if (ans.length === k)
                    return;
            }

            for (const [char, child] of node.children.entries()) {
                dfs(child, word + char);

                if (ans.length === k)
                    break;
            }
        };

        dfs(curr, "");

        return ans;
    }
}

export { SearchSuggestion as SearchSuggestion };
export { PrefixTree as PrefixTree };