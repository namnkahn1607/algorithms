/* 1004. max consecutive ones III */

import { describe, expect, it } from "vitest";
import { A } from "./1004a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        arr: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
        k: 2,
        output: 6,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Max Consecutive Ones III", () => {
        testCases.forEach(({ arr, k, output, description }) => {
            it(description, () => {
                const ans = solution.longestOnes(arr, k);

                expect(ans).toEqual(output);
            });
        });
    });
});