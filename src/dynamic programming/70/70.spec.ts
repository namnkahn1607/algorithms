/* 70. climbing stairs */

import { describe, expect, it } from "vitest";
import { A } from './70a';
import { B } from './70b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        n: 5,
        output: 8,
        description: 'a sample test',
    },
];

approaches.forEach(( { solution }) => {
    describe('Climbing Stairs', () => {
        testCases.forEach(({ n, output, description }) => {
            it(description, () => {
                const ans = solution.climbStairs(n);

                expect(ans).toEqual(output);
            });
        });
    });
});