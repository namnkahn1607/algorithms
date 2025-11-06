/* advanced algorithms test: A* Search */

import { describe, expect, it } from "vitest";
import { Astar } from "./a-star";

const testCases = [
    {
        allowDiagonal: false,
        grid: [
            [0, 0, 0, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 0]
        ],
        output: 17,
        description: '4-direction',
    },
    {
        allowDiagonal: true,
        grid: [
            [0, 0, 0, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 0]
        ],
        output: 11,
        description: '8-direction',
    },
];

describe('A* Search Test', () => {
    testCases.forEach(({ allowDiagonal, grid, output, description }) => {
        it(description, () => {
            const ans = new Astar().shortestPath(grid, allowDiagonal);

            expect(ans).toEqual(output);
        });
    });
});