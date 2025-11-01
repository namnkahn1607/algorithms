/* 703. k-th largest element in a stream */

import { describe, expect, it } from "vitest";
import { KthLargest } from "./703a";

const testCases = [
    {
        nums: [1, 2, 3, 3],
        k: 3,
        args: [3, 5, 6, 7, 8],
        output: [3, 3, 3, 5, 6],
        description: 'a sample test',
    },
];

describe("K-th Largest in a Stream", () => {
    testCases.forEach(({ nums, k, args, output, description }) => {
        it(description, () => {
            const solution = new KthLargest(k, nums);
            const ans: number[] = [];

            args.forEach((val) => ans.push(solution.add(val)));
            expect(ans).toEqual(output);
        });
    });
});