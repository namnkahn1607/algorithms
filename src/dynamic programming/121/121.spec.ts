/* 121. best time to buy & sell stock */

import { describe, expect, it } from "vitest";
import { A } from './121a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        prices: [7, 1, 5, 3, 6, 4],
        output: 5,
        description: 'a sample test',
    },
];

approaches.forEach(( { solution }) => {
    describe('Best Time to Buy & Sell Stock', () => {
        testCases.forEach(({ prices, output, description }) => {
            it(description, () => {
                const ans = solution.climbStairs(prices);

                expect(ans).toEqual(output);
            });
        });
    });
});