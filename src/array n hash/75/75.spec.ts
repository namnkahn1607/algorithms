/* 75. sort colors */

import { describe, expect, it } from "vitest";
import { A } from "./75a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        colors: [2, 0, 1, 0, 2, 2, 2, 1, 0],
        output: [0, 0, 0, 1, 1, 2, 2, 2, 2],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Sort Colors", () => {
        testCases.forEach(({ colors, output, description }) => {
            it(description, () => {
                solution.sortColors(colors);

                expect(colors).toEqual(output);
            });
        });
    });
});