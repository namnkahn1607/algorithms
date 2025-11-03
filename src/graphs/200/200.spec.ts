/* 200. number of islands */

import { describe, expect, it } from 'vitest';
import { A } from './200a';
import { B } from './200b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        grid: [
            ['1', '1', '0', '0', '1'],
            ['1', '1', '0', '0', '1'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1']
        ],
        output: 4,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Number of Islands', () => {
        testCases.forEach(({ grid, output, description }) => {
            it(description, () => {
                const ans = solution.numIslands(structuredClone(grid));

                expect(ans).toEqual(output);
            });
        });
    });
});