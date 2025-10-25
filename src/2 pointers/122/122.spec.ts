/* 122. best time to buy & sell stocks II */

import { A } from "./122a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        prices: [7, 1, 5, 3, 6, 4],
        output: 7,
        description: 'a sample test'
    },
];

approaches.forEach(({ solution }) => {
    describe('Best Time to Buy & Sell Stocks II', () => {
        testCases.forEach(({ prices, output, description }) => {
            it(description, () => {
                const ans = solution.maxProfit(prices);
                
                expect(ans).toEqual(output);
            });
        });
    });
});