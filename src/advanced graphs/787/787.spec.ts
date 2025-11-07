/* 787. cheapest flights within k steps */

import { describe, expect, it } from "vitest";
import { A } from './787a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        n: 4, src: 0, dst: 3, k: 1,
        flights: [
            [0, 1, 200], [1, 2, 100], [1, 3, 300], [2, 3, 100]
        ],
        output: 500,
        description: 're-routing',
    },
    {
        n: 3, src: 1, dst: 2, k: 1,
        flights: [
            [1, 0, 100], [1, 2, 200], [0, 2, 100]
        ],
        output: 200,
        description: 'light work',
    },
];

approaches.forEach(({ solution }) => {
    describe('Cheapest Flights within K Stops', () => {
        testCases.forEach(({ n, src, dst, k, flights, output, description }) => {
            it(description, () => {
                const ans = solution.findCheapestPrice(n, flights, src, dst, k);

                expect(ans).toEqual(output);
            });
        });
    });
});