/* 200. number of islands */

abstract class IsLandMap {
    abstract numIslands(grid: string[][]): number;

    public static run(sol: IsLandMap): void {
        const grid = [
            ["1","1","0","0","1"],
            ["1","1","0","0","1"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]
        ];

        console.log(sol.numIslands(grid));
    }
}

export { IsLandMap };