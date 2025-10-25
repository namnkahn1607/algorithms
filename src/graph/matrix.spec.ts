/* algorithms test: Matrix BFS & DFS */

import { describe, expect, it } from "vitest";
import { BFS } from "./bfs matrix";
import { DFS } from "./dfs matrix";

const runnable = {
    shortestPath: (grid: number[][]) => {
        return new BFS().shortestPath(grid);
    },
    countPaths: (grid: number[][]) => {
        return new DFS().countPaths(grid);
    }
} as const;

const testCases = [
    {
        grid: [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 1],
            [0, 1, 0, 0]
        ],
        shortestDist: 6,
        numberOfPaths: 2,
        description: 'a sample test',
    },
];

describe("Matrix BFS & DFS", () => {
    testCases.forEach(({ grid, shortestDist, numberOfPaths, description }) => {
        it(description, () => {
            const ans1 = runnable.shortestPath(structuredClone(grid));
            expect(ans1).toEqual(shortestDist);

            const ans2 = runnable.countPaths(structuredClone(grid));
            expect(ans2).toEqual(numberOfPaths);
        });
    });
});