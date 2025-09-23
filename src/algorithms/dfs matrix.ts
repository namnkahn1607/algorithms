/* algorithms: Graph - DFS Matrix */

class dfsMatrix {
    countPaths(grid: number[][]): number {
        const [row, col] = [grid.length, grid[0].length];
        const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];

        const dfs = function(r: number, c: number): number {
            if (r === row || c === col ||
                Math.min(r, c) < 0 || grid[r][c] === 1)
                return 0;

            if (r === row - 1 && c === col - 1)
                return 1;

            grid[r][c] = 1;
            let count = 0;

            for (const [dr, dc] of dirs)
                count += dfs(r + dr, c + dc);

            grid[r][c] = 0;
            return count;
        };

        return dfs(0, 0);
    }

    public static main(): void {
        // add matrix
        const grid: number[][] = [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 1],
            [0, 1, 0, 0]
        ];

        // count ways to get from top left to bottom right
        let ans = new dfsMatrix().countPaths(grid);
        console.log(ans);
    }
}

dfsMatrix.main();