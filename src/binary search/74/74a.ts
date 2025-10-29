/* 74a. search a 2D matrix */
// @: binary search
import { BS } from "../BS";

class A {
    searchMatrix(mat: number[][], target: number): boolean {
        const [row, col] = [mat.length, mat[0].length];
        let [L, R] = [0, row];

        while (L < R) {
            const M = L + Math.trunc((R - L) / 2);

            if (mat[M][col - 1] < target) {
                L = M + 1;
            } else {
                R = M;
            }
        }

        if (L === row)
            return false;

        if (mat[L][col - 1] === target)
            return true;

        return BS.search(mat[L], 0, col - 1, target) !== -1;
    }
}

export { A };