/* 28. needle in haystack */

import { describe, expect, it } from "vitest";
import { A } from "./28a";
import { B } from "./28b";

const approaches = [
    { name: '2 pointers', solution: new A() },
    { name: 'Knuth-Morris-Pratt', solution: new B() }
];

const testCases = [
    {
        haystack: "needcodeneetcode",
        needle: "neet",
        output: 8,
        description: 'a sample test'
    }
];

approaches.forEach(({ name, solution }) => {
    describe(`Needle In HayStack - ${name}`, () => {
        testCases.forEach(({ haystack, needle, output, description }) => {
            it(description, () => {
                const ans = solution.strStr(haystack, needle);
                expect(ans).toEqual(output);
            });
        });
    });
});