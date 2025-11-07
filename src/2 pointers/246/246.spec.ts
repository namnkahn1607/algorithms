/* 246. asteroid collision */

import { describe, expect, it } from 'vitest';
import { A } from './246a';
import { B } from './246b';

const approaches = [
    { solution: new A() }, { solution: new B() }
];

const testCases = [
    {
        astr: [2, 4, -4, 2],
        output: [2, 2],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Asteroid Collision', () => {
        testCases.forEach(({ astr, output, description }) => {
            it(description, () => {
                const ans = solution.asteroidCollision(astr.slice());

                expect(ans).toEqual(output);
            });
        });
    });
});