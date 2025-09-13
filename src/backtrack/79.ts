/* 79. word search */
// #: backtracking

class src79 {
    exist(board: string[][], word: string): boolean {
        const [row, col] = [board.length, board[0].length];
        const dir = [[-1, 0], [1, 0], [0, 1], [0, -1]];
        const len = word.length;

        const dfs = function(coord: [number, number], idx: number): boolean {
            if (idx === len)
                return true;

            const [X, Y] = coord;

            if ((X < 0 || X >= row) || (Y < 0 || Y >= col) ||
                board[X][Y] !== word[idx])
                return false;

            const tmp = board[X][Y];
            board[X][Y] = "#";

            for (const [a, b] of dir) {
                const [newX, newY] = [X + a, Y + b];

                if (dfs([newX, newY], idx + 1))
                    return true;
            }

            board[X][Y] = tmp;
            return false;
        };

        for (let i = 0; i < row; ++i) {
            for (let j = 0; j < col; ++j) {
                if (dfs([i, j], 0))
                    return true;
            }
        }

        return false;
    }

    public static main(): void {
        // add board & word
        const board: string[][] = [
            ["A", "B", "C", "D"],
            ["S", "A", "A", "T"],
            ["A", "C", "A", "E"]
        ];

        const word: string = "CAT";

        // check if word exist within board
        let ans: boolean = new src79().exist(board, word);
        console.log(ans);
    }
}

src79.main();