/* 21. merge 2 sorted lists */

import { SinglyLinkedList, ListNode } from "../linked list";

abstract class Merge2Lists {
    abstract mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null;

    public static run(sol: Merge2Lists): void {
        const l1: ListNode | null = SinglyLinkedList.createSLList([2, 4, 6, 8, 10]);
        const l2: ListNode | null = SinglyLinkedList.createSLList([1, 3]);

        SinglyLinkedList.printSLList(sol.mergeTwoLists(l1, l2));
    }
}

export { Merge2Lists as Merge2Lists };