/* 2a. add 2 numbers */
// @: linked list + recursion
import { Add2Numbers } from "./run";
import { ListNode } from "../linked list";

class A extends Add2Numbers {
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        const add = (rem: number): ListNode | null => {
            if (!l1 && !l2 && rem === 0)
                return null;

            const val1 = l1 ? l1.val : 0;
            const val2 = l2 ? l2.val : 0;

            let sum = val1 + val2 + rem;
            rem = Math.trunc(sum / 10);
            sum %= 10;

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;

            return new ListNode(sum, add(rem));
        };

        return add(0);
    }
}

A.run(new A());