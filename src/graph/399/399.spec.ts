/* 399. evaluate division */

import { describe, expect, it } from "vitest";
import { A } from "./399a";

const approaches = [
    { name: 'dfs', solution: new A() },
];

const testCases = [
    {
        equations: [["a","b"], ["b","c"], ["ab","bc"]],
        values: [4.0, 1.0, 3.25],
        queries: [
            ["a","c"], ["b","a"], ["c","c"],
            ["ab","a"], ["d","d"], ["a", "a"]
        ],
        output: [4, 0.25, 1, -1, -1, 1],
        description: 'a sample test',
    },
];

approaches.forEach(({ name, solution }) => {
    describe(`Evaluate Division - ${name}`, () => {
        testCases.forEach((
            { equations, values, queries, output, description }) => {
                it(description, () => {
                    const ans = solution.calcEquation(
                        equations, values, queries
                    );

                    expect(ans).toEqual(output);
                });
            }
        );
    });
})