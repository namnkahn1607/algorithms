/* 427. construct quad tree */

import { describe, expect, it } from "vitest";
import { QuadTree, _Node } from "../quad tree";
import { A } from "./427a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        grid: [
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0]
        ],
        output: [
            '[0, 0]', '[1, 1]', '[0, 0]', '[1, 1]', '[0, 1]',
            '[0, 1]', '[0, 1]', '[1, 1]', '[1, 1]'
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Construct Quad Tree", () => {
        testCases.forEach(({ grid, output, description }) => {
            it(description, () => {
                const ans: _Node = solution.construct(grid);

                expect(QuadTree.toArray(ans)).toEqual(output);
            });
        });
    });
});