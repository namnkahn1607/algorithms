/* 130b. surrounded regions */
// @: multi-source bfs
import { XO } from "./run";
import { Queue } from "datastructures-js";

class B extends XO {
    solve(board: string[][]) {
        const [row, col] = [board.length, board[0].length];
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        const capture = (): void => {
            const queue = new Queue<number[]>();

            for (let R = 0; R < row; ++R) {
                for (let C = 0; C < col; ++C) {
                    if ((R === 0 || R === row - 1 ||
                        C === 0 || C === col - 1) && board[R][C] === "O")
                        queue.enqueue([R, C]);
                }
            }

            while (!queue.isEmpty()) {
                const [R, C] = queue.dequeue()!;

                if (board[R][C] === "O") {
                    board[R][C] = "#";

                    for (const [dR, dC] of dirs) {
                        const [newR, newC] = [R + dR, C + dC];

                        if (0 <= newR && newR < row &&
                            0 <= newC && newC < col)
                            queue.enqueue([newR, newC]);
                    }
                }
            }
        };

        capture();

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

B.run(new B());