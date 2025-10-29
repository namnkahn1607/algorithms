/* 4. median of 2 sorted array */

import { describe, expect, it } from "vitest";
import { A } from "./4a";

const approach = [
    { solution: new A() },
];

const testCases = [
    {
        nums1: [1, 3, 5, 7, 9],
        nums2: [2, 4, 6, 8, 10, 12],
        output: 6,
        description: 'a sample test',
    },
];

approach.forEach(({ solution }) => {
    describe("Median of 2 Sorted Arrays", () => {
        testCases.forEach(({ nums1, nums2, output, description }) => {
            it(description, () => {
                const ans = solution.findMedianSortedArrays(nums1, nums2);

                expect(ans).toEqual(output);
            });
        });
    });
});