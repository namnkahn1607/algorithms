/* 90. subsets II */

import { describe, expect, it } from "vitest";
import { A } from "./90a";

const approaches = [
    { name: 'backtrack', solution: new A() },
];

const testCases = [
    {
        arr: [1, 2, 2],
        output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]],
        description: 'a sample test',
    },
];

approaches.forEach(({ name, solution }) => {
    describe(`Subsets II - ${name}`, () => {
        testCases.forEach(({ arr, output, description }) => {
            it(description, () => {
                const ans = solution.subsetsWithDup(arr);

                const cmp = (a: number[], b: number[]) => {
                    return a.join(",").length - b.join(",").length;
                };

                ans.sort(cmp);
                output.sort(cmp);

                expect(ans).toEqual(output);
            });
        });
    });
});