/* 23c. merge k sorted lists */
// @: heap
import { MergeList } from "./run";
import { MinPriorityQueue } from "datastructures-js";
import { ListNode } from "../linked list";

class C extends MergeList {
    mergeKLists(lists: Array<ListNode | null>): ListNode | null {
        const minHeap = new MinPriorityQueue<ListNode>(node => node.val);

        for (const head of lists) {
            if (head) minHeap.enqueue(head);
        }

        const dummy = new ListNode();
        let curr = dummy;

        while (!minHeap.isEmpty()) {
            let node = minHeap.dequeue()!;
            curr.next = node;
            curr = curr.next;

            if (node.next !== null)
                minHeap.enqueue(node.next);
        }

        return dummy.next;
    }
}

C.run(new C());