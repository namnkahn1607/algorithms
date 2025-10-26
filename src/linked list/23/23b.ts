/* 23b. merge k sorted lists */
// @: divide and conquer (iteration)
import { ListNode } from "../linked list";
import { merge2Lists } from "./23a";

class B {
    mergeKLists(lists: Array<ListNode | null>): ListNode | null {
        if (!lists || lists.length === 0)
            return null;

        while (lists.length > 1) {
            const mergedLists = [];

            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                const l2 = i + 1 < lists.length ? lists[i + 1] : null;

                mergedLists.push(merge2Lists(l1, l2));
            }

            lists = mergedLists;
        }

        return lists[0];
    }
}

export { B };