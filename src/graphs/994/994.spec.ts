/* 994. rotting fruit */

import { describe, expect, it } from 'vitest';
import { A } from './994a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        grid: [
            [1, 1, 0], [0, 1, 1], [0, 1, 2]
        ],
        output: 4,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Rotting Fruit', () => {
        testCases.forEach(({ grid, output, description }) => {
            it(description, () => {
                const ans = solution.fruitRotting(grid);

                expect(ans).toEqual(output);
            });
        });
    });
});