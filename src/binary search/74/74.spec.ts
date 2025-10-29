/* 74. search a 2D matrix */

import { describe, expect, it } from "vitest";
import { A } from "./74a";

const approach = [
    { solution: new A() },
];

const testCases = [
    {
        mat: [
            [1, 2, 4, 8],
            [10, 11, 12, 13],
            [14, 20, 30, 40]
        ],
        target: 30,
        output: true,
        description: 'a sample test',
    },
];

approach.forEach(({ solution }) => {
    describe("Search a 2D Matrix", () => {
        testCases.forEach(({ mat, target, output, description }) => {
            it(description, () => {
                const ans = solution.searchMatrix(mat, target);

                expect(ans).toEqual(output);
            });
        });
    });
});