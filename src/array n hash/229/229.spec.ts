/* 229. majority element II */

import { describe, expect, it } from "vitest";
import { A } from "./229a";
import { B } from "./229b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        nums: [1, 1, 2, 2],
        output: [1, 2],
        description: '2 dominants',
    },
    {
        nums: [2, 1, 2],
        output: [2],
        description: 'one dominant',
    },
    {
        nums: [1, 2, 3, 3, 3, 3],
        output: [3],
        description: 'balanced triplet',
    },
];

approaches.forEach(({ solution }) => {
    describe("Majority Element II", () => {
        testCases.forEach(({ nums, output, description }) => {
            it(description, () => {
                const ans = solution.majorityElement(nums);
                const cmp = (a: number, b: number) => a - b;

                expect(ans.sort(cmp)).toEqual(output.sort(cmp));
            });
        });
    });
});