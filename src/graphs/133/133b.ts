/* 133b. clone graph */
// @: bfs
import { _Node } from "../graph";
import { Queue } from "datastructures-js";

class B {
    cloneGraph(node: _Node | null): _Node | null {
        if (!node) return null;

        const cloneDict = new Map<_Node, _Node>();
        cloneDict.set(node, new _Node(node.val));
        const queue = new Queue<_Node>([node]);

        while (!queue.isEmpty()) {
            const cur = queue.dequeue()!;
            const curClone = cloneDict.get(cur)!;

            for (const neigh of cur.neighbors) {
                if (!cloneDict.has(neigh)) {
                    cloneDict.set(neigh, new _Node(neigh.val));
                    queue.enqueue(neigh);
                }

                const neiClone = cloneDict.get(neigh)!;
                curClone.neighbors.push(neiClone);
            }
        }

        return cloneDict.get(node)!;
    }
}

export { B };