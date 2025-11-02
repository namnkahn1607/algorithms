/* 198. house robber */

import { describe, expect, it } from "vitest";
import { A } from './198a';
import { B } from './198b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        nums: [2, 9, 8, 3, 6],
        output: 16,
        description: 'a sample test',
    },
];

approaches.forEach(( { solution }) => {
    describe('House Robber', () => {
        testCases.forEach(({ nums, output, description }) => {
            it(description, () => {
                const ans = solution.rob(nums);

                expect(ans).toEqual(output);
            });
        });
    });
});