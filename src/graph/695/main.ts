/* 695. max area of island */

abstract class AreaIsland {
    abstract maxAreaOfIsland(grid: number[][]): number;

    public static run(sol: AreaIsland): void {
        const grid: number[][] = [
            [0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1]
        ];

        console.log(sol.maxAreaOfIsland(grid));
    }
}

export { AreaIsland };