/* 467b. island perimeter */
// @: iteration

class B {
    islandPerimeter(grid: number[][]): number {
        const [ROW, COL] = [grid.length, grid[0].length];
        let perimeter = 0;

        for (let R = 0; R < ROW; ++R) {
            for (let C = 0; C < COL; ++C) {
                if (grid[R][C] === 0)
                    continue;

                perimeter += 4;

                if (R > 0 && grid[R - 1][C] === 1)
                    perimeter -= 2;

                if (C > 0 && grid[R][C - 1] === 1)
                    perimeter -= 2;
            }
        }

        return perimeter;
    }
}

export { B };