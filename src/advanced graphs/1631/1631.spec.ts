/* 1631. path with minimum effort */

import { describe, expect, it } from "vitest";
import { A } from './1631a';
import { B } from './1631b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        heights: [
            [1, 1, 1], [3, 2, 4], [2, 5, 4]
        ],
        output: 2,
        description: 'medium take',
    },
    {
        heights: [
            [1, 1, 1], [1, 1, 2], [6, 5, 2]
        ],
        output: 1,
        description: 'easy take',
    },
    {
        heights: [[1]],
        output: 0,
        description: 'light work',
    },
];

approaches.forEach(({ solution }) => {
    describe('Path with Minimum Effort', () => {
        testCases.forEach(({ heights, output, description }) => {
            it(description, () => {
                const ans = solution.minimumEffortPath(heights);

                expect(ans).toEqual(output);
            });
        });
    });
});