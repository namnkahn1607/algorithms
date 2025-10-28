/* 77. combinations */

import { describe, expect, it } from "vitest";
import { A } from "./77a";
import { B } from "./77b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        n: 4, k: 2,
        output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Combinations", () => {
        testCases.forEach(({ n, k, output, description }) => {
            it(description, () => () => {
                const ans = solution.combine(n, k);
                const cmp = (nums: number[]) => nums.join(",");

                expect(ans.map(cmp).sort()).toEqual(output.map(cmp).sort());
            });
        });
    });
});