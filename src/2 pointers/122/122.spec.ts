/* 122. best time to buy & sell stocks II */

import { describe, expect, it } from "vitest";
import { A } from "./122";

const approaches = [
    { name: '2 pointers', solution: new A() },
];

const testCases = [
    {
        prices: [7, 1, 5, 3, 6, 4],
        output: 7,
        description: 'a sample test'
    },
];

approaches.forEach(({ name, solution }) => {
    describe(`Best Time to Buy & Sell Stocks II - ${name}`, () => {
        testCases.forEach(({ prices, output, description }) => {
            it(description, () => {
                const ans = solution.maxProfit(prices);
                expect(ans).toEqual(output);
            });
        });
    });
});