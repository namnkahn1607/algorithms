/* 17. letter combination of a phone number */

import { describe, expect, it } from "vitest";
import { A } from "./17a";
import { B } from "./17b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        digits: "24",
        output: ['ag', 'ah', 'ai', 'bg', 'bh', 'bi', 'cg', 'ch', 'ci'],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Letter Combination of a Phone Number", () => {
        testCases.forEach(({ digits, output, description }) => {
            it(description, () => {
                const ans = solution.letterCombinations(digits);

                expect(ans.sort()).toEqual(output.sort());
            });
        });
    });
});