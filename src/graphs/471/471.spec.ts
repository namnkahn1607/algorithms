/* 471. atlantic pacific water flow */

import { describe, expect, it } from "vitest";
import { A } from './471a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        heights: [
            [4, 2, 7, 3, 4],
            [7, 4, 6, 4, 7],
            [6, 3, 5, 3, 6]
        ],
        output: [
            [0, 2], [0, 4], [1, 0], [1, 1],
            [1, 2], [1, 3], [1, 4], [2, 0]
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Atlantic Pacific Water Flow', () => {
        testCases.forEach(({ heights, output, description }) => {
            it(description, () => {
                const ans = solution.pacificAtlantic(heights);

                expect(ans.sort()).toEqual(output.sort());
            });
        });
    });
});