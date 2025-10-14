/* 130. surrounded regions */

abstract class XO {
    abstract solve(board: string[][]): void;

    public static run(sol: XO): void {
        const board: string[][] = [
            ["X","X","X","X"],
            ["X","O","O","X"],
            ["X","X","O","X"],
            ["X","O","X","X"]
        ];

        sol.solve(board);

        console.log(board.map(row => {
            return row.join(" ")
        }).join("\n"));
    }
}

export { XO };