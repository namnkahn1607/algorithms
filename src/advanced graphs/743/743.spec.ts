/* 743. network delay time */

import { describe, expect, it } from "vitest";
import { A } from "./743a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        times: [[1, 2, 1], [2, 3, 1], [1, 4, 4], [3, 4, 1]],
        n: 4,
        k: 1,
        output: 3,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Network Delay Time', () => {
        testCases.forEach(({ times, n, k, output, description }) => {
            it(description, () => {
                const ans = solution.networkDelayTime(times, n, k);

                expect(ans).toEqual(output);
            });
        });
    });
});