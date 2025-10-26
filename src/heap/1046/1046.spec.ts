/* 1046. last stone weight */

import { describe, expect, it } from "vitest";
import { A } from "./1046a";
import { B } from "./1046b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        stones: [2, 3, 6, 2, 4],
        output: 1,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Last Stone Weight", () => {
        testCases.forEach(({ stones, output, description }) => {
            it(description, () => {
                const ans = solution.lastStoneWeight(stones);

                expect(ans).toEqual(output);
            });
        });
    });
});