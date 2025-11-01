/* 200a. number of islands */
// @: dfs
import { IsLandMap } from "./run";

class A extends IsLandMap {
    numIslands(grid: string[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const dfs = (R: number, C: number): void => {
            if (R === row || C === col ||
                Math.min(R, C) < 0 || grid[R][C] !== "1")
                return;

            grid[R][C] = "#";

            for (const [dR, dC] of dirs)
                dfs(R + dR, C + dC);
        };

        let count = 0;

        for (let R = 0; R < row; ++R) {
            for (let C = 0; C < col; ++C) {
                if (grid[R][C] === "1") {
                    ++count;
                    dfs(R, C);
                }
            }
        }

        return count;
    }
}

A.run(new A());