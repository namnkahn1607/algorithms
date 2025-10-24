/* 1137. n-th fibonacci number */

import { describe, expect, it } from "vitest";
import { A } from "./1137a";
import { B } from "./1137b";
import { C } from "./1137c";

const approaches = [
    { name: 'dp top down', solution: new A() },
    { name: 'dp bottom up', solution: new B() },
    { name: 'space optimized dp', solution: new C() },
];

const testCases = [
    {
        n: 12,
        output: 504,
        description: 'a sample test',
    },
];

approaches.forEach(({ name, solution }) => {
    describe(`N-th Fibonacci Number - ${name}`, () => {
        testCases.forEach(({ n, output, description }) => {
            it(description, () => {
                const ans = solution.tribonacci(n);

                expect(ans).toEqual(output);
            });
        });
    });
});