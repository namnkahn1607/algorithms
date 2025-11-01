/* 286. walls and gates */

abstract class WallGates {
    abstract wallsAndGates(grid: number[][]): void;

    public static run(sol: WallGates): void {
        const grid: number[][] = [
            [2147483647, -1, 0, 2147483647],
            [2147483647, 2147483647, 2147483647, -1],
            [2147483647, -1, 2147483647, -1],
            [0, -1, 2147483647, 2147483647]
        ];

        sol.wallsAndGates(grid);
        console.log(grid.map(row => row.join(" ")).join("\n"));
    }
}

export { WallGates };