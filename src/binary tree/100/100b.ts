/* 100b. same binary tree */
// @: binary tree + dfs
import { SameTree } from "./run";
import { TreeNode } from "../binary tree";
import { Stack } from "datastructures-js";

class B extends SameTree {
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        const pStack = new Stack<TreeNode | null>([p]);
        const qStack = new Stack<TreeNode | null>([q]);

        while (!pStack.isEmpty() && !qStack.isEmpty()) {
            const pTop = pStack.pop();
            const qTop = qStack.pop();

            if (!pTop && !qTop)
                continue;

            if (!qTop || !pTop || pTop.val === qTop.val)
                return false;

            pStack.push(pTop.right);
            pStack.push(pTop.left);

            qStack.push(qTop.right);
            qStack.push(qTop.left);
        }

        return pStack.isEmpty() && qStack.isEmpty();
    }
}

B.run(new B());