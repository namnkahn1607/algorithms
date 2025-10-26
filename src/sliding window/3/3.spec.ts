/* 3. longest substr without repeating chars */

import { describe, expect, it } from "vitest";
import { A } from "./3a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        str: "zxyzzxyz",
        output: 3,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Longest Substring Without Repeating Characters", () => {
        testCases.forEach(({ str, output, description }) => {
            it(description, () => {
                const ans = solution.lengthOfLongestSubstring(str);

                expect(ans).toEqual(output);
            });
        });
    });
});