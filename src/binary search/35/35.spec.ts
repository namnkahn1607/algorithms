/* 35a. search insert position */

import { describe, expect, it } from "vitest";
import { A } from "./35a";

const approach = [
    { solution: new A() },
];

const testCases = [
    {
        arr: [-1, 0, 2, 4, 6, 8],
        target: 5,
        output: 4,
        description: 'a sample test',
    },
];

approach.forEach(({ solution }) => {
    describe("Search Insert Position", () => {
        testCases.forEach(({ arr, target, output, description }) => {
            it(description, () => {
                const ans = solution.searchInsert(arr, target);

                expect(ans).toEqual(output);
            });
        });
    });
});