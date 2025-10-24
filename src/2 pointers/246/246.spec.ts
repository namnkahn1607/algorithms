/* 246. asteroid collision */

import { describe, expect, it } from "vitest";
import { A } from "./246a";
import { B } from "./246b";

const approaches = [
    { name: '2 pointers + dp', solution: new A() },
    { name: 'stack', solution: new B() }
];

const testCases = [
    {
        astr: [2, 4, -4, 2],
        output: [2, 2],
        description: 'a sample test'
    },
];

approaches.forEach(({ name, solution }) => {
    describe(`Asteroid Collision - ${name}`, () => {
        testCases.forEach(({ astr, output, description }) => {
            it(description, () => {
                const ans = solution.asteroidCollision([...astr]);
                expect(ans).toEqual(output);
            });
        });
    });
});