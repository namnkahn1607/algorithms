/* 33. search in sorted rotated array */

import { describe, expect, it } from "vitest";
import { A } from "./33a";

const approach = [
    { solution: new A() },
];

const testCases = [
    {
        nums: [3, 4, 5, 6, 1, 2],
        target: 1,
        output: 4,
        description: 'a sample test',
    },
];

approach.forEach(({ solution }) => {
    describe("Search in Sorted Rotated Array", () => {
        testCases.forEach(({ nums, target, output, description }) => {
            it(description, () => {
                const ans = solution.search(nums, target);

                expect(ans).toEqual(output);
            });
        });
    });
});