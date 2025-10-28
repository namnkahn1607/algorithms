/* 40. combination sum II */

import { describe, expect, it } from "vitest";
import { A } from "./40a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        nums: [9, 2, 2, 4, 6, 1, 5],
        target: 8,
        output: [[1, 2, 5], [2, 2, 4], [2, 6]],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Combination Sum II", () => {
        testCases.forEach(({ nums, target, output, description }) => {
            it(description, () => {
                const ans = solution.combinationSum2(nums, target);

                expect(ans).toEqual(output);
            });
        });
    });
});