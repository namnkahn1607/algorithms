/* 1493. longest subarray of 1's after deleting 1 element */

import { describe, expect, it } from "vitest";
import { A } from "./1493a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        arr: [0, 1, 1, 1, 0, 1, 1, 0, 1],
        output: 5,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Longest Subarray of 1's After Deleting 1 Element", () => {
        testCases.forEach(({ arr, output, description }) => {
            it(description, () => {
                const ans = solution.longestSubarray(arr);

                expect(ans).toEqual(output);
            });
        });
    });
});