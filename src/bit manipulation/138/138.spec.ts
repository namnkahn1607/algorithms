/* 138. single number */

import { describe, expect, it } from 'vitest';
import { A } from './138a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        nums: [2, 4, 4],
        output: 2,
        description: 'standard test-01',
    },
    {
        nums: [7, 6, 6, 7, 8],
        output: 8,
        description: 'standard test-02',
    },
];

approaches.forEach(({ solution }) => {
    describe('Single Number', () => {
        testCases.forEach(({ nums, output, description }) => {
            it(description, () => {
                const ans = solution.singleNumber(nums);

                expect(ans).toEqual(output);
            });
        });
    });
});