/* 695a. max area of island */
// @: dfs
import { AreaIsland } from "./main";

class A extends AreaIsland {
    maxAreaOfIsland(grid: number[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const dfs = (R: number, C: number): number => {
            if (R === row || C === col ||
                Math.min(R, C) < 0 || grid[R][C] !== 1)
                return 0;

            grid[R][C] = -1;
            let area = 1;

            for (const [dR, dC] of dirs)
                area += dfs(R + dR, C + dC);

            return area;
        };

        let ans = 0;

        for (let R = 0; R < row; ++R) {
            for (let C = 0; C < col; ++C) {
                if (grid[R][C] === 1)
                    ans = Math.max(ans, dfs(R, C));
            }
        }

        return ans;
    }
}

A.run(new A());