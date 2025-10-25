/* 71. simplify path */

import { describe, expect, it } from "vitest";
import { A } from "./71a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        path: "/..//_home/a/b/..///",
        output: "/_home/a",
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Simplify Path", () => {
        testCases.forEach(({ path, output, description }) => {
            it(description, () => {
                const ans = solution.simplifyPath(path);

                expect(ans).toEqual(output);
            });
        });
    });
});