/* 169. majority element */

import { describe, expect, it } from "vitest";
import { A } from "./169a";
import { B } from "./169b";

const approaches = [
    { solution: new A() },
    { solution: new B() },
];

const testCases = [
    {
        nums: [2, 2, 1, 1, 1, 2, 2],
        output: 2,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Majority Element", () => {
        testCases.forEach(({ nums, output, description }) => {
            it(description, () => {
                const ans = solution.majorityElement(nums);

                expect(ans).toEqual(output);
            });
        });
    });
});