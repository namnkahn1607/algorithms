/* data structures: Linked List */

export class ListNode {
    constructor(
        public val: number = 0,
        public next: ListNode | null = null
    ) {}
}

export class SinglyLinkedList {
    public static createSLList(arr: number[]): ListNode | null {
        const [head, _] = SinglyLinkedList.createSLListWithTail(arr);

        return head;
    }

    public static createSLListWithTail(arr: number[]): (ListNode | null)[] {
        if (arr === null || arr.length === 0)
            return [null, null];

        const head = new ListNode(arr[0]);
        let tail: ListNode = head;

        for (let i = 1; i < arr.length; ++i)
            tail = tail.next = new ListNode(arr[i]);

        return [head, tail];
    }

    public static printSLList(head: ListNode | null): void {
        if (!head) {
            console.log("empty");
            return;
        }

        console.log(SinglyLinkedList.convertToArray(head).join(" "));
    }

    public static convertToArray(head: ListNode | null): number[] {
        if (!head) return [];

        const ans: number[] = [];
        let curr: ListNode | null = head;

        while (curr) {
            ans.push(curr.val);
            curr = curr.next!;
        }

        return ans;
    }
}