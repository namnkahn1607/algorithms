/* 78. subsets */

import { describe, expect, it } from "vitest";
import { A } from "./78a";
import { B } from "./78b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        nums: [1, 2, 3, 4],
        output: [
            [1, 2, 3, 4], [1, 2, 3], [1, 2, 4], [1, 2],
            [1, 3, 4], [1, 3], [1, 4], [1], [2, 3, 4],
            [2, 3], [2, 4], [2], [3, 4], [3], [4], []
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Subsets", () => {
        testCases.forEach(({ nums, output, description }) => {
            it(description, () => {
                const ans = solution.subsets(nums);
                const cmp = (nums: number[]) => nums.join(",");

                expect(ans.map(cmp).sort()).toEqual(output.map(cmp).sort());
            });
        });
    });
});