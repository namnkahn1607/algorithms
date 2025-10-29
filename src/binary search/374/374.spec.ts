/* 374. guess number higher or lower */

import { describe, expect, it } from "vitest";
import { A } from "./374a";

const approach = [
    { solution: new A() },
];

const testCases = [
    {
        n: 5,
        picked: 2,
        output: 2,
        description: 'a sample test',
    },
];

approach.forEach(({ solution }) => {
    describe("Guess Number Higher or Lower", () => {
        testCases.forEach(({ n, picked, output, description }) => {
            it(description, () => {
                solution.setPicked(picked);
                const ans = solution.guessNum(n);

                expect(ans).toEqual(output);
            });
        });
    });
});