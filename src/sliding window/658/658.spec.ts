/* 658. find k closest elements */

import { describe, expect, it } from "vitest";
import { A } from "./658a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        arr: [0, 0, 0, 1, 3, 5, 6, 7, 8, 8],
        k: 2,
        x: 2,
        output: [1, 3],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Find K Closest Elements", () => {
        testCases.forEach(({ arr, k, x, output, description }) => {
            it(description, () => {
                const ans = solution.findClosestElements(arr, k, x);

                expect(ans).toEqual(output);
            });
        });
    });
});