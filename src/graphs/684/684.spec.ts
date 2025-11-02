/* 684. redundant connection */

import { describe, expect, it } from "vitest";
import { A } from './684a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        edges: [
            [1, 2], [1, 3], [3, 4], [2, 4]
        ],
        output: [2, 4],
        description: 'a sample test'
    },
];

approaches.forEach(({ solution }) => {
    describe('Redundant Connection', () => {
        testCases.forEach(({ edges, output, description }) => {
            it(description, () => {
                const ans = solution.findRedundantConnection(edges);

                expect(ans.sort()).toEqual(output.sort());
            });
        });
    });
});