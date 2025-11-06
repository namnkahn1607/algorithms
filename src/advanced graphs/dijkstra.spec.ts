/* advanced algorithms test: Dijkstra */

import { describe, expect, it } from "vitest";
import { Dijkstra } from "./dijkstra";

const testCases = [
    {
        N: 5,
        edges: [
            [0, 1, 10], [0, 2, 3], [1, 3, 2], [2, 1, 4],
            [2, 3, 8], [2, 4, 2], [3, 4, 5]
        ],
        src: 0,
        output: new Map<number, number>([
            [0, 0], [1, 7], [2, 3], [3, 9], [4, 5]
        ]),
        description: 'a sample test',
    },
];

describe('Dijkstra Test', () => {
    testCases.forEach(({ N, edges, src, output, description }) => {
        it(description, () => {
            const ans = new Dijkstra().shortestPath(N, edges, src);

            expect(ans).toEqual(output);
        });
    });
});