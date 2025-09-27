/* 427. construct quad tree */

import { _Node, QuadTree } from "../quad tree";

abstract class ConstructQuadTree {
    abstract construct(grid: number[][]): _Node;

    public static run(sol: ConstructQuadTree): void {
        const grid: number[][] = [
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 0, 0, 0]
        ];

        QuadTree.printQuadTree(sol.construct(grid))
    }
}

export { ConstructQuadTree };