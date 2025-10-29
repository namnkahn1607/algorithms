/* 69. sqrt(x) */

import { describe, expect, it } from "vitest";
import { A } from "./69a";

const approach = [
    { solution: new A() },
];

const testCases = [
    {
        num: 2,
        output: 1,
        description: 'a sample test',
    },
];

approach.forEach(({ solution }) => {
    describe("Sqrt(x)", () => {
        testCases.forEach(({ num, output, description }) => {
            it(description, () => {
                const ans = solution.mySqrt(num);

                expect(ans).toEqual(output);
            });
        });
    });
});