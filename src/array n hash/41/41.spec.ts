/* 41. first missing positive */

import { describe, expect, it } from "vitest";
import { A } from "./41a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        nums: [1, 2, 6, 4, 5],
        output: 3,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("First Missing Positive", () => {
        testCases.forEach(({ nums, output, description }) => {
            it(description, () => {
                const ans = solution.firstMissingPositive(nums);

                expect(ans).toEqual(output);
            });
        });
    });
});