/* 133. clone graph */

import { _Node, Graph } from "../graph";
import _ from "lodash";

abstract class CloneGraph {
    abstract cloneGraph(node: _Node | null) : _Node | null;

    public static run(sol: CloneGraph): void {
        const node: _Node | null = Graph.createGraph([
            [2, 4], [1, 3], [2, 4], [1, 3]
        ]);

        Graph.printGraph(sol.cloneGraph(node));
        Graph.printGraph(_.cloneDeep(node));
    }
}

export { CloneGraph };