/* 23a. merge k sorted lists */
// @: divide and conquer (recursion)
import { MergeList } from "./main";
import { ListNode } from "../linked list";

class A extends MergeList {
    mergeKLists(lists: Array<ListNode | null>): ListNode | null {
        const divide = (L: number, R: number): ListNode | null => {
            if (L > R) return null;

            if (L === R) return lists[L];

            const mid = L + Math.trunc((R - L) / 2);
            const left = divide(L, mid);
            const right = divide(mid + 1, R);

            return this.merge2Lists(left, right);
        };

        if (!lists || lists.length === 0)
            return null;

        return divide(0, lists.length - 1);
    }
}

A.run(new A());