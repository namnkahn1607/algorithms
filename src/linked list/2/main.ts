/* 2. add 2 numbers */

import { SinglyLinkedList, ListNode } from "../linked list";

abstract class Add2Numbers {
    abstract addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null;

    public static run(sol: Add2Numbers): void {
        const l1: ListNode | null = SinglyLinkedList.createSLList([1, 2, 3]);
        const l2: ListNode | null = SinglyLinkedList.createSLList([7, 8, 9]);

        SinglyLinkedList.printSLList(sol.addTwoNumbers(l1, l2));
    }
}

export { Add2Numbers as Add2Numbers };