/* 21b. merge 2 sorted lists */
// @: linked list + iteration
import { Merge2Lists } from "./main";
import { ListNode } from "../linked list";

class B extends Merge2Lists {
    mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        let dummy = new ListNode();
        let curr: ListNode = dummy;

        while (l1 || l2) {
            if (!l2 || (l1 && l1.val <= l2.val)) {
                curr.next = l1;
                l1 = l1!.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }

            curr = curr.next!;
        }

        return dummy.next;
    }
}

B.run(new B());