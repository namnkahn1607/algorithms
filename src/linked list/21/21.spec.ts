/* 21. merge 2 sorted lists */

import { describe, expect, it } from "vitest";
import { SinglyLinkedList } from "../linked list";
import { A } from "./21a";
import { B } from "./21b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        l1: [2, 4, 6, 8, 10],
        l2: [1, 3],
        output: [1, 2, 3, 4, 6, 8, 10],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Merge 2 Sorted Lists', () => {
        testCases.forEach(({ l1, l2, output, description }) => {
            it(description, () => {
                const ll1 = SinglyLinkedList.create(l1);
                const ll2 = SinglyLinkedList.create(l2);

                const ans = solution.mergeTwoLists(ll1, ll2);
                expect(ans).toEqual(SinglyLinkedList.create(output));
            });
        });
    });
});