/* 1926. nearest exit from entrance in maze */

import { describe, expect, it } from "vitest";
import { A } from "./1926";

const approaches = [
    { name: "bfs", solution: new A() },
];

const testCases = [
    {
        maze: [
            ["+","+",".","+"],
            [".",".",".","+"],
            ["+","+","+","."]
        ],
        entrance: [1, 2],
        output: 1,
        description: 'a sample test'
    },
];

approaches.forEach(({ name, solution }) => {
    describe(`Nearest Exit from Entrance in Maze - ${name}`, () => {
        testCases.forEach(({ maze, entrance, output, description }) => {
            it(description, () => {
                const ans = solution.nearestExit(maze, entrance);

                expect(ans).toEqual(output);
            });
        });
    });
});