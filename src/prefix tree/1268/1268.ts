/* 1268. search suggestion system */
// @: trie
import { SearchSuggestion } from "./run";
import { PrefixTree } from "./run";

class A extends SearchSuggestion {
    suggestedProducts(products: string[], searchWord: string): string[][] {
        const system = new PrefixTree();
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

A.run(new A());