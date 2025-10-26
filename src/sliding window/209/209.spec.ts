/* 209. minimum size subarray sum */

import { describe, expect, it } from "vitest";
import { A } from "./209a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        arr: [2, 1, 5, 1, 5, 3],
        target: 10,
        output: 3,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Minimum Size Subarray Sum", () => {
        testCases.forEach(({ arr, target, output, description }) => {
            it(description, () => {
                const ans = solution.minSubarrayLen(arr, target);

                expect(ans).toEqual(output);
            });
        });
    });
});