/* 778. swim in rising water */

import { describe, expect, it } from "vitest";
import { A } from './778a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        grid: [
            [0, 1], [2, 3]
        ],
        output: 3,
        description: 'simple matrix',
    },
    {
        grid: [
            [0, 1, 2, 10],
            [9, 14, 4, 13],
            [12, 3, 8, 15],
            [11, 5, 7, 6]
        ],
        output: 8,
        description: 'medium matrix',
    },
    {
        grid: [
            [3, 2], [0, 1]
        ],
        output: 3,
        description: 'surprise!',
    },
];

approaches.forEach(({ solution }) => {
    describe('Swim in Rising Water', () => {
        testCases.forEach(({ grid, output, description }) => {
            it(description, () => {
                const ans = solution.swimInWater(grid);

                expect(ans).toEqual(output);
            });
        });
    });
});