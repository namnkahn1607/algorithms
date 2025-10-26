/* 1456. maxima number of vowels in a substr */

import { describe, expect, it } from "vitest";
import { A } from "./1456a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        str: "abciiidef",
        k: 3,
        output: 3,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Kth Largest Element in an Array", () => {
        testCases.forEach(({ str, k, output, description }) => {
            it(description, () => {
                const ans = solution.maxVowels(str, k);

                expect(ans).toEqual(output);
            });
        });
    });
});