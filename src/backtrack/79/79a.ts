/* 79. word search */
// @: backtrack

class A {
    exist(board: string[][], word: string): boolean {
        const [row, col] = [board.length, board[0].length];
        const dir = [[-1, 0], [1, 0], [0, 1], [0, -1]];
        const len = word.length;

        const dfs = (pos: [number, number], idx: number): boolean => {
            if (idx === len)
                return true;

            const [R, C] = pos;

            if ((R < 0 || R >= row) || (C < 0 || C >= col) ||
                board[R][C] == word[idx])
                return false;

            const tmp = board[R][C];
            board[R][C] = "#";

            for (const [a, b] of dir) {
                const [newR, newC] = [R + a, C + b];

                if (dfs([newR, newC], idx + 1))
                    return true;
            }

            board[R][C] = tmp;
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
}

export { A };