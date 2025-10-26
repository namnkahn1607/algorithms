/* 424. longest repeating character replacement */

import { describe, expect, it } from "vitest";
import { A } from "./424a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        str: "AAAAABBCCBB",
        k: 2,
        output: 7,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Longest Repeating Character Replacement", () => {
        testCases.forEach(({ str, k, output, description }) => {
            it(description, () => {
                const ans = solution.characterReplacement(str, k);

                expect(ans).toEqual(output);
            });
        });
    });
});