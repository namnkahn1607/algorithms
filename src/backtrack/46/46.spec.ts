/* 46. permutations */

import { describe, expect, it } from "vitest";
import { A } from "./46a";
import { B } from "./46b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        nums: [1, 2, 3],
        output: [
            [3, 2, 1], [1, 2, 3], [3, 1, 2], [2, 3, 1], [1, 3, 2], [2, 1, 3]
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Permutations", () => {
        testCases.forEach(({ nums, output, description }) => {
            it(description, () => {
                const ans = solution.permutes(nums);
                const cmp = (nums: number[]) => nums.join(",");

                expect(ans.map(cmp).sort()).toEqual(output.map(cmp).sort());
            });
        });
    });
});