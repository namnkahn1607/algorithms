/* 130a. surrounded regions */
// @: dfs
import { XO } from "./run";

class A extends XO {
    solve(board: string[][]) {
        const [row, col] = [board.length, board[0].length];
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        const dfs = (R: number, C: number): void => {
            if (R === row || C === col ||
                Math.min(R, C) < 0 || board[R][C] !== "O")
                return;

            board[R][C] = "#";

            for (const [dR, dC] of dirs)
                dfs(R + dR, C + dC);
        };

        for (let R = 0; R < row; ++R) {
            if (board[R][0] === "O") dfs(R, 0);
            if (board[R][col - 1] === "O") dfs(R, col - 1);
        }

        for (let C = 1; C < col - 1; ++C) {
            if (board[0][C] === "O") dfs(0, C);
            if (board[row - 1][C] === "O") dfs(row - 1, C);
        }

        for (let R = 0; R < row; ++R) {
            for (let C = 0; C < col; ++C) {
                switch (board[R][C]) {
                    case "O": board[R][C] = "X"; break;
                    case "#": board[R][C] = "O"; break;
                }
            }
        }
    }
}

A.run(new A());