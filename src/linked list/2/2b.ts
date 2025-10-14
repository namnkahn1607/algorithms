/* 2b. add 2 numbers */
// @: linked list + iteration
import { Add2Numbers } from "./run";
import { ListNode } from "../linked list";

class B extends Add2Numbers {
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        const dummy = new ListNode();
        let curr: ListNode | null = dummy;
        let rem = 0;

        while (l1 || l2 || rem !== 0) {
            const val1 = l1 ? l1.val : 0;
            const val2 = l2 ? l2.val : 0;

            let sum = val1 + val2 + rem;
            rem = Math.trunc(sum / 10);
            sum %= 10;

            curr.next = new ListNode(sum);
            curr = curr.next;

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return dummy.next;
    }
}

B.run(new B());