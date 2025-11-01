/* 1137. n-th fibonacci number */

import { describe, expect, it } from "vitest";
import { A } from "./1137a";
import { B } from "./1137b";
import { C } from "./1137c";

const approaches = [
    { solution: new A() },
    { solution: new B() },
    { solution: new C() },
];

const testCases = [
    {
        n: 12,
        output: 504,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('N-th Fibonacci Number', () => {
        testCases.forEach(({ n, output, description }) => {
            it(description, () => {
                const ans = solution.tribonacci(n);

                expect(ans).toEqual(output);
            });
        });
    });
});