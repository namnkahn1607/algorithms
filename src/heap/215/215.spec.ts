/* 215. k-th largest element in an array */

import { describe, expect, it } from "vitest";
import { A } from "./215a";
import { B } from "./215b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        arr: [2, 3, 1, 1, 5, 5, 4],
        k: 3,
        output: 4,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Kth Largest Element in an Array", () => {
        testCases.forEach(({ arr, k, output, description }) => {
            it(description, () => {
                const ans = solution.findKthLargest(arr, k);

                expect(ans).toEqual(output);
            });
        });
    });
});