/* 1466. reorder routes to make all paths lead to city zero */

import { describe, expect, it } from 'vitest';
import { A } from './1466a';
import { B } from './1466b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        n: 6, connections: [
            [0, 1], [1, 3], [2, 3], [4, 0], [4, 5]
        ],
        output: 3,
        description: 'graph-like map',
    },
    {
        n: 5, connections: [
            [1, 0], [1, 2], [3, 2], [3, 4]
        ],
        output: 2,
        description: 'linear map',
    },
];

approaches.forEach(({ solution }) => {
    describe('Reorder Routes to Make All Paths Lead to City Zero', () => {
        testCases.forEach(({ n, connections, output, description }) => {
            it(description, () => {
                const ans = solution.minReorder(n, connections);

                expect(ans).toEqual(output);
            });
        });
    });
});