/* 973. k closest points to origin */

import { describe, expect, it } from "vitest";
import { A } from "./973a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        points: [[0, 2], [2, 0], [2, 2]],
        k: 2,
        output: [[0, 2], [2, 0]],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("K Closest Points to Origin", () => {
        testCases.forEach(({ points, k, output, description }) => {
            it(description, () => {
                const ans = solution.kClosest(points, k);

                expect(ans).toEqual(output);
            });
        });
    });
});