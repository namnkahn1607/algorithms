/* 323. number of connected components in an undirected graph */

import { describe, expect, it } from "vitest";
import { A } from './323a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        n: 6,
        edges: [[0, 1], [1, 2], [2, 3], [4, 5]],
        output: 2,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Number of Connected Components in an Undirected Graph', () => {
        testCases.forEach(({ n, edges, output, description }) => {
            it(description, () => {
                const ans = solution.countComponents(n, edges);

                expect(ans).toEqual(output);
            });
        });
    });
});