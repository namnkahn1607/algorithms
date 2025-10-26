/* 2. add 2 numbers */

import { describe, expect, it } from "vitest";
import { SinglyLinkedList } from "../linked list";
import { A } from "./2a";
import { B } from "./2b";

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        l1: [1, 2, 3],
        l2: [7, 8, 9],
        output: [8, 0, 3, 1],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Add 2 Numbers', () => {
        testCases.forEach(({ l1, l2, output, description }) => {
            it(description, () => {
                const ll1 = SinglyLinkedList.create(l1);
                const ll2 = SinglyLinkedList.create(l2);

                const ans = solution.addTwoNumbers(ll1, ll2);
                expect(ans).toEqual(SinglyLinkedList.create(output));
            });
        });
    });
});