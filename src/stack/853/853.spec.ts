/* 853. car fleet */

import { describe, expect, it } from "vitest";
import { A } from "./853a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        target: 10,
        position: [4, 1, 0, 7],
        speed: [2, 2, 1, 1],
        output: 3,
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Car Fleet", () => {
        testCases.forEach(({ target, position, speed, output, description }) => {
            it(description, () => {
                const ans = solution.carFleet(target, position, speed);

                expect(ans).toEqual(output);
            });
        });
    });
});