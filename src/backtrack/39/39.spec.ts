/* 39. combination sum */

import { describe, expect, it } from "vitest";
import { A } from "./39a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        nums: [2, 5, 6, 9],
        target: 9,
        output: [[2, 2, 5], [9]],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Combination Sum", () => {
        testCases.forEach(({ nums, target, output, description }) => {
            it(description, () => {
                const ans = solution.combinationSum(nums, target);

                expect(ans).toEqual(output);
            });
        });
    });
});