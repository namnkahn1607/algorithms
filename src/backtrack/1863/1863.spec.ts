/* 1863. sum of all subsets XOR total */

import { describe, expect, it } from "vitest";
import { A } from "./1863a";

const approaches = [
    { name: 'backtrack', solution: new A() },
];

const testCases = [
    {
        nums: [3, 4, 5, 6, 7, 8],
        output: 480,
        description: 'a sample test',
    },
];

approaches.forEach(({ name, solution}) => {
    describe(`Sum of All Subsets XOR Total - ${name}`, () => {
        testCases.forEach(({ nums, output, description }) => {
            it(description, () => {
                const ans = solution.subsetXORSum(nums);

                expect(ans).toEqual(output);
            });
        });
    });
});