/* 1268. search suggestion system */
// @: trie
import { Trie, TrieNode } from "../trie";

class SearchSuggestion extends Trie {
    firstKWithPrefix(prefix: string, k: number): string[] {
        let curr: TrieNode = this.root;

        for (const c of prefix) {
            if (!curr.children.has(c))
                return [];

            curr = curr.children.get(c)!;
        }

        const ans: string[] = [];

        const dfs = (node: TrieNode, word: string) => {
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

    suggestedProducts(products: string[], searchWord: string): string[][] {
        const system = new SearchSuggestion();
        products.sort();

        for (const word of products)
            system.insert(word);

        const ans: string[][] = [];
        let searchKey = "";

        for (const c of searchWord) {
            searchKey += c;
            ans.push(system.firstKWithPrefix(searchKey, 3));
        }

        return ans;
    }
}

export { SearchSuggestion };