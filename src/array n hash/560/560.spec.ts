/* 560. subarray sum equals k */

import { describe, expect, it } from "vitest";
import { A } from "./560a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        arr: [10, 5, 3, -2],
        k: 8,
        output: 2,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Subarray Sum Equals K", () => {
        testCases.forEach(({ arr, k, output, description }) => {
            it(description, () => {
                const ans = solution.subarraySum(arr, k);

                expect(ans).toEqual(output);
            });
        });
    });
});