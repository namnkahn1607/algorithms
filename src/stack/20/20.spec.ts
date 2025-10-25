/* 20. valid parentheses */

import { describe, expect, it } from "vitest";
import { A } from "./20";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        str: "()[{}]",
        output: true,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Valid Parentheses', () => {
        testCases.forEach(({ str, output, description }) => {
            it(description, () => {
                const ans = solution.isValid(str);

                expect(ans).toEqual(output);
            });
        });
    });
});