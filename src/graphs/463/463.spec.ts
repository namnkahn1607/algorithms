/* 463. island perimeter */

import { describe, expect, it } from "vitest";
import { A } from './463a';
import { B } from './463b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        grid: [
            [1, 1, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 1]
        ],
        output: 18,
        description: 'medium island',
    },
    {
        grid: [[1, 0]],
        output: 4,
        description: 'tiny island',
    },
];

approaches.forEach(({ solution }) => {
    describe('Island Perimeter', () => {
        testCases.forEach(({ grid, output, description }) => {
            it(description, () => {
                const ans = solution.islandPerimeter(
                    structuredClone(grid)
                );

                expect(ans).toEqual(output);
            });
        });
    });
});