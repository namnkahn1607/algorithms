/* 680. valid palindrome II */

import { describe, expect, it } from "vitest";
import { A } from "./680a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        str: "abbdba",
        output: true,
        description: 'a sample test'
    },
];

approaches.forEach(({ solution }) => {
    describe('Valid Palindrome II', () => {
        testCases.forEach(({ str, output, description }) => {
            it(description, () => {
                const ans = solution.validPalindrome(str);

                expect(ans).toEqual(output);
            });
        });
    });
});