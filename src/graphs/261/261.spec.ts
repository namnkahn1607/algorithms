/* 261. graph valid tree */

import { describe, expect, it } from 'vitest';
import { A } from './261a';
import { B } from './261b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        n: 5,
        edges: [
            [0, 1], [0, 2], [0, 3], [1, 4]
        ],
        output: true,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Graph Valid Tree', () => {
        testCases.forEach(({ n, edges, output, description }) => {
            it(description, () => {
                const ans = solution.validTree(n, edges);

                expect(ans).toEqual(output);
            });
        });
    });
});