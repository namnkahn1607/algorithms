/* 88. merge sorted arrays */

import { describe, expect, it } from "vitest";
import { A } from "./88";

const approaches = [
    { name: '2 pointers', solution: new A() },
];

const testCases = [
    {
        nums1: [10, 20, 20, 40],
        nums2: [1, 2],
        output: [1, 2, 10, 20, 20, 40],
        description: 'a sample test'
    }
];

approaches.forEach(({ name, solution }) => {
    describe(`Merge Sorted Arrays - ${name}`, () => {
        testCases.forEach(({ nums1, nums2, output, description }) => {
            it(description, () => {
                solution.merge(nums1, nums1.length, nums2, nums2.length);
                expect(nums1).toEqual(output);
            });
        });
    });
});