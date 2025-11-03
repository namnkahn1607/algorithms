/* 953. verify an alien dictionary */

import { describe, expect, it } from 'vitest';
import { A } from './953a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        words: ['dag', 'disk', 'dog'],
        order: 'hlabcdefgijkmnopqrstuvwxyz',
        output: true,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Verify an Alien Dictionary', () => {
        testCases.forEach(({ words, order, output, description }) => {
            it(description, () => {
                const ans = solution.isAlienSorted(words, order);

                expect(ans).toEqual(output);
            });
        });
    });
});