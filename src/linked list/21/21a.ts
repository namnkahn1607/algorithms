/* 21a. merge 2 sorted lists */
// @: linked list + recursion
import { ListNode } from "../linked list";

class A {
    mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        if (!l1) return l2;

        if (!l2) return l1;

        if (l1.val <= l2.val) {
            l1.next = this.mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = this.mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
}

export { A };