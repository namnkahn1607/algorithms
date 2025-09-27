/* data structures: Quad Tree */

import { Queue } from "datastructures-js";

export class _Node {
    constructor(
        public val: boolean = false,
        public isLeaf: boolean = false,
        public topLeft: _Node | null = null,
        public topRight: _Node | null = null,
        public bottomLeft: _Node | null = null,
        public bottomRight: _Node | null = null
    ) {}
}

export class QuadTree {
    public static printQuadTree(root: _Node | null): void {
        if (!root) {
            console.log("empty");
            return;
        }

        const ans: string[] = [];
        const queue = new Queue<_Node>([root]);

        while (!queue.isEmpty()) {
            const curr = queue.dequeue()!;
            ans.push(`[${Number(curr.val)}, ${Number(curr.isLeaf)}]`);

            if (!curr.isLeaf) {
                queue.push(curr.topLeft!);
                queue.push(curr.topRight!);
                queue.push(curr.bottomLeft!);
                queue.push(curr.bottomRight!);
            }
        }

        console.log(ans.join(" "));
    }
}