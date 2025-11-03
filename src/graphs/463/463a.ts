/* 463a. island perimeter */
// @: dfs

class A {
    islandPerimeter(grid: number[][]): number {
        const [ROW, COL] = [grid.length, grid[0].length];
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]]

        const dfs = (R: number, C: number): number => {
            if (R < 0 || R >= ROW || C < 0 || C >= COL)
                return 1;

            if (grid[R][C] === 0)
                return 1;

            if (grid[R][C] === -1)
                return 0;

            grid[R][C] = -1;
            let perimeter = 0;

            for (const [dR, dC] of dirs)
                perimeter += dfs(R + dR, C + dC);

            return perimeter;
        };

        for (let R = 0; R < ROW; ++R) {
            for (let C = 0; C < COL; ++C)
                if (grid[R][C] === 1) return dfs(R, C);
        }

        return 0;
    }
}

export { A };