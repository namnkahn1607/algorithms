/* 695. max area of island */

import { describe, expect, it } from 'vitest';
import { A } from './695a';
import { B } from './695b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        grid: [
            [0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1]
        ],
        output: 6,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Max Area of Island', () => {
        testCases.forEach(({ grid, output, description }) => {
            it(description, () => {
                const ans = solution.maxAreaOfIsland(
                    structuredClone(grid)
                );

                expect(ans).toEqual(output);
            });
        });
    });
});