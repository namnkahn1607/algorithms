/* 1584. min cost to connect points */

import { describe, expect, it } from "vitest";
import { A } from './1584a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        points: [
            [0, 0], [2, 2], [3, 3], [2, 4], [4, 2]
        ],
        output: 10,
        description: 'standard test-01',
    },
    {
        points: [
            [0, 0], [2, 2], [3, 10], [5, 2], [7, 0]
        ],
        output: 20,
        description: 'standard test-02',
    },
    {
        points: [
            [3, 12], [-2, 5], [-4, 1]
        ],
        output: 18,
        description: 'standard test-03',
    },
];

approaches.forEach(({ solution }) => {
    describe('Min Cost to Connect Points', () => {
        testCases.forEach(({ points, output, description }) => {
            it(description, () => {
                const ans = solution.minCostConnectPoints(points);

                expect(ans).toEqual(output);
            });
        });
    });
});