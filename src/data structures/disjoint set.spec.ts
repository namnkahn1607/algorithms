/* data structures test: Disjoint Set */

import { describe, expect, it } from 'vitest';
import { DisjointSet } from "./disjoint set";

const testCases = [
    {
        n: 10,
        args: [
            [1, 3], [1, 2], [2, 3], [1, 3]
        ],
        output: [true, true, false, false],
        description: 'a sample test',
    },
];

describe('Disjoint Set Test', () => {
    testCases.forEach(({ n, args, output, description }) => {
        it(description, () => {
            const uf = new DisjointSet(n);
            const ans: boolean[] = [];

            for (const [x, y] of args)
                ans.push(uf.union(x, y));

            expect(ans).toEqual(output);
        });
    });
});