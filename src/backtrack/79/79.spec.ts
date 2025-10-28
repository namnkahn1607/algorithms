/* 79. word search */

import { describe, expect, it } from "vitest";
import { A } from "./79a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        board: [
            ['A', 'B', 'C', 'D'],
            ['S', 'A', 'A', 'I'],
            ['A', 'C', 'A', 'E']
        ],
        word: 'CAT',
        output: true,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Word Search", () => {
        testCases.forEach(({ board, word, output, description }) => {
            it(description, () => {
                const ans = solution.exist(board, word);

                expect(ans).toEqual(output);
            });
        });
    });
});