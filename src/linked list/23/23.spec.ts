/* 23. merge k sorted lists */

import { describe, expect, it } from "vitest";
import { SinglyLinkedList } from "../linked list";
import { A } from "./23a";
import { B } from "./23b";
import { C } from "./23c";

const approaches = [
    { solution: new A() },
    { solution: new B() },
    { solution: new C() },
];

const testCases = [
    {
        args: [[1, 2, 4], [1, 3, 5], [3, 6]],
        output: [1, 1, 2, 3, 3, 4, 5, 6],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Merge K Sorted Lists', () => {
        testCases.forEach(({ args, output, description }) => {
            it(description, () => {
                const lists = args.map(arg => SinglyLinkedList.create(arg));

                const ans = solution.mergeKLists(lists);
                expect(ans).toEqual(SinglyLinkedList.create(output));
            });
        });
    });
});