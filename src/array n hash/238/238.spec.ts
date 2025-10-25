/* 238. product of array except self */

import { describe, expect, it } from "vitest";
import { A } from "./238a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        arr: [-1, 0, 1, 2, 3],
        output: [0, -6, 0, 0, 0],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Product of Array Except Self", () => {
        testCases.forEach(({ arr, output, description }) => {
            it(description, () => {
                const ans = solution.productExceptSelf(arr);
                ans.forEach((val, i) => ans[i] = Object.is(val, -0) ? 0 : val);

                expect(ans).toEqual(output);
            });
        });
    });
});