/* advanced algorithms test: Kruskal & Prim */

import { describe, expect, it } from 'vitest';
import { Prim } from './prim';
import { Kruskal } from './kruskal';

const testCases = [
    {
        n: 5,
        edges: [
            [0, 1, 10], [0, 2, 3],
            [1, 2, 4], [1, 3, 1],
            [2, 3, 4], [2, 4, 4],
            [3, 4, 2],
        ],
        output: [3, 4, 1, 2],
        description: 'standard test-01'
    },
    {
        n: 5,
        edges: [
            [0, 1, 10], [0, 2, 3],
            [1, 3, 2],
            [2, 1, 4], [2, 3, 8], [2, 4, 2],
            [3, 4, 5]
        ],
        output: [3, 4, 2, 2],
        description: 'standard test-02',
    },
];

describe('Kruskal Test', () => {
    testCases.forEach(({ n, edges, output, description }) => {
        it(description, () => {
            const ans = new Kruskal().minimumSpanningTree(n, edges);

            const cmp = (a: number, b: number) => a - b;

            expect(ans.sort(cmp)).toEqual(output.sort(cmp));
        });
    });
});

describe('Prim Test', () => {
    testCases.forEach(({ n, edges, output, description }) => {
        it(description, () => {
            const ans = new Prim().minimumSpanningTree(n, edges);

            const cmp = (a: number, b: number) => a - b;

            expect(ans.sort(cmp)).toEqual(output.sort(cmp));
        });
    });
});