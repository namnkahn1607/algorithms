/* 743. network delay time */

import { describe, expect, it } from 'vitest';
import { A } from './743a';
import { B } from './743b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        times: [[1, 2, 1], [2, 3, 1], [1, 4, 4], [3, 4, 1]],
        n: 4, k: 1,
        output: 3,
        description: 'good startpoint',
    },
    {
        times: [[1, 2, 1], [2, 3, 1]],
        n: 3, k: 2,
        output: -1,
        description: 'bad startpoint',
    },
];

approaches.forEach(({ solution }) => {
    describe('Network Delay Time', () => {
        testCases.forEach(({ times, n, k, output, description }) => {
            it(description, () => {
                const ans = solution.networkDelayTime(times, n, k);

                expect(ans).toEqual(output);
            });
        });
    });
});