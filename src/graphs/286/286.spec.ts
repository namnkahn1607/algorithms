/* 286. walls and gates */

import { describe, expect, it } from 'vitest';
import { A } from './286a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        grid: [
            [2147483647, -1, 0, 2147483647],
            [2147483647, 2147483647, 2147483647, -1],
            [2147483647, -1, 2147483647, -1],
            [0, -1, 2147483647, 2147483647]
        ],
        output: [
            [3, -1, 0, 1],
            [2, 2, 1, -1],
            [1, -1, 2, -1],
            [0, -1, 3, 4],
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Number of Islands', () => {
        testCases.forEach(({ grid, output, description }) => {
            it(description, () => {
                const clone = structuredClone(grid);
                solution.wallsAndGates(clone);

                expect(clone).toEqual(output);
            });
        });
    });
});