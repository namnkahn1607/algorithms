/* 547. number of provinces */

import { describe, expect, it } from "vitest";
import { A } from './547a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        isConnected: [
            [1, 1, 0], [1, 1, 0], [0, 0, 1]
        ],
        output: 2,
        description: 'small adjacent matrix',
    },
    {
        isConnected: [
            [1, 0, 0], [0, 1, 0], [0, 0, 1]
        ],
        output: 3,
        description: 'discrete adjacent matrix',
    },
    {
        isConnected: [
            [1, 1, 1], [1, 1, 1], [1, 1, 1]
        ],
        output: 1,
        description: 'fully connected',
    },
];

approaches.forEach(({ solution }) => {
    describe('Number of Provinces', () => {
        testCases.forEach(({ isConnected, output, description }) => {
            it(description, () => {
                const ans = solution.findCircleNum(isConnected);

                expect(ans).toEqual(output);
            });
        });
    });
});