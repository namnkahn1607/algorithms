/* 22. generate parenthesis */

import { describe, expect, it } from "vitest";
import { A } from "./22a";
import { B } from "./22b";

const approaches = [
    { name: "stack", solution: new A() },
    { name: "backtrack", solution: new B() },
];

const testCases = [
    {
        N: 2,
        output: ["()()", "(())"],
        description: 'a sample test',
    },
];

approaches.forEach(({ name, solution }) => {
    describe(`Generate Parenthesis - ${name}`, () => {
        testCases.forEach(({ N, output, description }) => {
            it(description, () => {
                const ans = solution.generateParenthesis(N);

                expect(ans.sort()).toEqual(output.sort());
            });
        });
    });
});