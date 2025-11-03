/* 997. find the town judge */

import { describe, expect, it } from 'vitest';
import { A } from './997a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        n: 4,
        trust: [
            [1, 3], [4, 3], [2, 3]
        ],
        output: 3,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Find the Town Judge', () => {
        testCases.forEach(({ n, trust, output, description }) => {
            it(description, () => {
                const ans = solution.findJudge(n, trust);

                expect(ans).toEqual(output);
            });
        });
    });
});