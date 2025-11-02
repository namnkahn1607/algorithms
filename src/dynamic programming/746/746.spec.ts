/* 746. min cost climbing stairs */

import { describe, expect, it } from "vitest";
import { A } from './746a';
import { B } from './746b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        cost: [1, 2, 1, 2, 1, 1, 1],
        output: 4,
        description: 'a sample test',
    },
];

approaches.forEach(( { solution }) => {
    describe('Min Cost Climbing Stairs', () => {
        testCases.forEach(({ cost, output, description }) => {
            it(description, () => {
                const ans = solution.minCostClimbingStairs(cost.slice());

                expect(ans).toEqual(output);
            });
        });
    });
});