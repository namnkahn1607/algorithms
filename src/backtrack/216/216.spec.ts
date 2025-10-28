/* 216. combination sum III */

import { describe, expect, it } from "vitest";
import { A } from "./216a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        k: 3, n: 9,
        output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Combination Sum III", () => {
        testCases.forEach(({ k, n, output, description }) => {
            it(description, () => {
                const ans = solution.combinationSum3(k, n);

                expect(ans).toEqual(output);
            });
        });
    });
});