/* 23. merge k sorted lists */

import { SinglyLinkedList, ListNode } from "../linked list";

abstract class MergeList {
    abstract mergeKLists(lists: Array<ListNode | null>): ListNode | null;

    merge2Lists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        const dummy = new ListNode();
        let curr = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }

            curr = curr.next;
        }

        curr.next = (l1) ? l1 : l2;

        return dummy.next;
    }

    public static run(sol: MergeList): void {
        const args: number[][] = [
            [1, 2, 4], [1, 3, 5], [3, 6]
        ];

        const lists = new Array<ListNode | null>(args.length);

        for (let i = 0; i < args.length; ++i)
            lists[i] = SinglyLinkedList.createSLList(args[i]);

        SinglyLinkedList.printSLList(sol.mergeKLists(lists));
    }
}

export { MergeList };