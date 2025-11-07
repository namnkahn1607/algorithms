/* 338. counting bits */

import { describe, expect, it } from 'vitest';
import { A } from './338a';
import { B } from './338b';
import { C } from './338c';

const approaches = [
    { solution: new A() },
    { solution: new B() },
    { solution: new C() },
];

const testCases = [
    {
        n: 1,
        output: [0, 1],
        description: 'standard test-01',
    },
    {
        n: 2,
        output: [0, 1, 1],
        description: 'standard test-02',
    },
    {
        n: 4,
        output: [0, 1, 1, 2, 1],
        description: 'standard test-03',
    },
];

approaches.forEach(({ solution }) => {
    describe('Counting Bits', () => {
        testCases.forEach(({ n, output, description }) => {
            it(description, () => {
                const ans = solution.countBits(n);

                expect(ans).toEqual(output);
            });
        });
    });
});