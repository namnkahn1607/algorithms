/* 704. binary search */

import { describe, expect, it } from "vitest";
import { A } from "./704a";
import { B } from "./704b"

const approach = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        arr: [-1, 0, 2, 4, 6, 8],
        target: 4,
        output: 3,
        description: 'a sample test',
    },
];

approach.forEach(({ solution }) => {
    describe("Binary Search", () => {
        testCases.forEach(({ arr, target, output, description }) => {
            it(description, () => {
                const ans = solution.search(arr, target);

                expect(ans).toEqual(output);
            });
        });
    });
});