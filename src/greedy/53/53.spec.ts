/* 53. maximum subarray */

import { describe, expect, it } from "vitest";
import { A } from "./53a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        arr: [4, -1, 2, -7, 3, 4],
        output: 7,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe(" Maximum Subarray", () => {
        testCases.forEach(({ arr, output, description }) => {
            it(description, () => {
                const ans = solution.maxSubarray(arr);

                expect(ans).toEqual(output);
            });
        });
    });
});