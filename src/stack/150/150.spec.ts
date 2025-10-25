/* 150. evaluate reverse polish notation */

import { describe, expect, it } from "vitest";
import { A } from "./150a";
import { B } from "./150b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tokens: ["1", "2", "+", "3", "*", "4", "-"],
        output: 5,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Evaluate RPN", () => {
        testCases.forEach(({ tokens, output, description }) => {
            it(description, () => {
                const ans = solution.evaluateRPN(tokens);

                expect(ans).toEqual(output);
            });
        });
    });
});