/* 138. copy list with random pointers */

import { describe, expect, it } from "vitest";
import { RandomList } from "../random list";
import { A } from "./138a";

const approaches = [
    { solution: new A() },
];

type TestCase = {
    llist: [number, number | null][],
    description: string,
};

const testCases: TestCase[] = [
    {
        llist: [[3, null], [7, 3], [4, 0], [5, 1]],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Copy List with Random Pointers', () => {
        testCases.forEach(({ llist, description }) => {
            it(description, () => {
                const head = RandomList.create(llist);

                const clone = solution.copyRandomList(head);
                expect(clone).toEqual(head);
            });
        });
    });
});