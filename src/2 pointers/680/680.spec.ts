/* 680. valid palindrome II */

import { describe, expect, it } from "vitest";
import { A } from "./680";

const approaches = [
    { name: '2 pointers', solution: new A() },
];

const testCases = [
    {
        str: "abbdba",
        output: true,
        description: 'a sample test'
    },
];

approaches.forEach(({ name, solution }) => {
    describe(`Valid Palindrome II - ${name}`, () => {
        testCases.forEach(({ str, output, description }) => {
            it(description, () => {
                const ans = solution.validPalindrome(str);
                expect(ans).toEqual(output);
            });
        });
    });
});