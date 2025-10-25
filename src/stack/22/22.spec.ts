/* 22. generate parenthesis */

import { describe, expect, it } from "vitest";
import { A } from "./22a";
import { B } from "./22b";

const approaches = [
    { solution: new A() },
    { solution: new B() },
];

const testCases = [
    {
        N: 2,
        output: ["()()", "(())"],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Generate Parenthesis', () => {
        testCases.forEach(({ N, output, description }) => {
            it(description, () => {
                const ans = solution.generateParenthesis(N);

                expect(ans.sort()).toEqual(output.sort());
            });
        });
    });
});