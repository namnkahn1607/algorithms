/* 427. construct quad tree */
// @: divide n conquer
import { ConstructQuadTree } from "./main";
import { _Node } from "../quad tree";

class A extends ConstructQuadTree {
    construct(grid: number[][]): _Node {
        const dfs = (R: number, C: number, size: number): _Node => {
            if (size === 1)
                return new _Node(Boolean(grid[R][C]), true);

            size /= 2;
            const topLeft = dfs(R, C, size);
            const topRight = dfs(R, C + size, size);
            const bottomLeft = dfs(R + size, C, size);
            const bottomRight = dfs(R + size, C + size, size);

            const allLeaf =
                topLeft.isLeaf && topRight.isLeaf &&
                bottomLeft.isLeaf && bottomRight.isLeaf;

            const allEqual =
                topLeft.val === topRight.val &&
                topRight.val === bottomLeft.val &&
                bottomLeft.val === bottomRight.val;

            if (allLeaf && allEqual)
                return topLeft;

            return new _Node(
                false, false, topLeft, topRight,
                bottomLeft, bottomRight
            );
        };

        return dfs(0, 0, grid.length);
    }
}

A.run(new A());