/* 1268. search suggestion system */

import { SearchSuggestion } from "./1268a";

const approaches = [
    { solution: new SearchSuggestion() },
];

const testCases = [
    {
        products: ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
        searchWord: "mouse",
        output: [
            ["mobile", "moneypot", "monitor"],
            ["mobile", "moneypot", "monitor"],
            ["mouse", "mousepad"],
            ["mouse", "mousepad"],
            ["mouse", "mousepad"],
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Search Suggestion System', () => {
        testCases.forEach(({ products, searchWord, output, description }) => {
            it(description, () => {
                const ans = solution.suggestedProducts(products, searchWord);

                expect(ans).toEqual(output);
            });
        });
    });
});