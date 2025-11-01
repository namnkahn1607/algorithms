/* 133a. clone graph */
// @: dfs
import { CloneGraph } from "./main";
import { _Node } from "../graph";

class A extends CloneGraph {
    cloneGraph(node: _Node | null): _Node | null {
        if (!node) return null;

        const map = new Map<number, _Node>();

        const dfs = (node: _Node): _Node => {
            const val = node.val;

            if (map.has(val))
                return map.get(val)!;

            const clone = new _Node(val);
            map.set(val, clone);

            for (const neigh of node.neighbors)
                clone.neighbors.push(dfs(neigh));

            return clone;
        };

        return dfs(node);
    }
}

A.run(new A());