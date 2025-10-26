/* 219. contains duplicate II */

import { describe, expect, it } from "vitest";
import { A } from "./219a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        arr: [1, 2, 3, 1, 2, 3],
        k: 2,
        output: false,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Contains Duplicate II", () => {
        testCases.forEach(({ arr, k, output, description }) => {
            it(description, () => {
                const ans = solution.containsNearbyDuplicate(arr, k);

                expect(ans).toEqual(output);
            });
        });
    });
});