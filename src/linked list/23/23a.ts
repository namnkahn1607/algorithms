/* 23a. merge k sorted lists */
// @: divide and conquer (recursion)
import { ListNode } from "../linked list";

class A {
    mergeKLists(lists: Array<ListNode | null>): ListNode | null {
        const divide = (L: number, R: number): ListNode | null => {
            if (L > R) return null;

            if (L === R) return lists[L];

            const mid = L + Math.trunc((R - L) / 2);
            const left = divide(L, mid);
            const right = divide(mid + 1, R);

            return merge2Lists(left, right);
        };

        if (!lists || lists.length === 0)
            return null;

        return divide(0, lists.length - 1);
    }
}

const merge2Lists = (
    l1: ListNode | null, l2: ListNode | null
): ListNode | null => {
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
};

export { A, merge2Lists };