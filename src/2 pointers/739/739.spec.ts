/* 739. daily temperatures */

import { describe, expect, it } from "vitest";
import { A } from "./739a";
import { B } from "./739b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        tmps: [30, 38, 30, 36, 35, 40, 28],
        output: [1, 4, 1, 2, 1, 0, 0],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Daily Temperatures', () => {
        testCases.forEach(({ tmps, output, description }) => {
            it(description, () => {
                const ans = solution.dailyTemperatures(tmps);

                expect(ans).toEqual(output);
            });
        });
    });
});