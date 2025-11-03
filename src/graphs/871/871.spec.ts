/* 871. keys and rooms */

import { describe, expect, it } from 'vitest';
import { A } from './871a';
import { B } from './871b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        rooms: [
            [1, 3], [3, 0, 1], [2], [0]
        ],
        output: false,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Keys and Rooms', () => {
        testCases.forEach(({ rooms, output, description }) => {
            it(description, () => {
                const ans = solution.canVisitAllRooms(rooms);

                expect(ans).toEqual(output);
            });
        });
    });
});