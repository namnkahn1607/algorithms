/* algorithms: DFS on matrix */

class DFS {
    countPaths(grid: number[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

        const dfs = (R: number, C: number): number => {
            if (R === row || C === col ||
                Math.min(R, C) < 0 || grid[R][C] === 1)
                return 0;

            if (R === row - 1 && C === col - 1)
                return 1;

            grid[R][C] = 1;
            let count = 0;

            for (const [dR, dC] of dirs)
                count += dfs(R + dR, C + dC);

            grid[R][C] = 0;

            return count;
        };

        return dfs(0, 0);
    }
}

export { DFS };