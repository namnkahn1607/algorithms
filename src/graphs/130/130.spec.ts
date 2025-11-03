/* 130. surrounded regions */

import { describe, expect, it } from "vitest";
import { A } from './130a';
import { B } from './130b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        board: [
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'X']
        ],
        output: [
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'X', 'X']
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Surrounded Regions', () => {
        testCases.forEach(({ board, output, description }) => {
            it(description, () => {
                const clone = structuredClone(board);
                solution.solve(clone);

                expect(clone).toEqual(output);
            });
        });
    });
});