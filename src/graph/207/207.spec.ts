/* 207. course schedule */

import { describe, expect, it } from "vitest";
import { A } from "./207a";

const approaches = [
    { name: 'dfs', solution: new A() },
];

const testCases = [
    {
        requisites: [
            [0, 10], [3, 18], [5, 5], [6, 11],
            [11, 14], [13, 1], [15, 1], [17, 4]
        ],
        numCourse: 20,
        output: false,
        description: 'a sample test',
    },
];

approaches.forEach(({ name, solution }) => {
    describe(`Course Schedule - ${name}`, () => {
        testCases.forEach(({ requisites, numCourse, output, description }) => {
            it(description, () => {
                const ans = solution.canFinish(numCourse, requisites);

                expect(ans).toEqual(output);
            });
        });
    });
});