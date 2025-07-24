/* 74. search a 2D matrix */
// #: bs
import { BS } from "../addons";

class src74 {
    static searchMatrix(mat: number[][], target: number): boolean {
        const [row, col] = [mat.length, mat[0].length];

        let [low, high] = [0, row];

        while (low < high) {
            const mid = low + Math.trunc((high - low) / 2);

            if (mat[mid][col - 1] < target)
                low = mid + 1;
            else
                high = mid;
        }

        if (low === row) return false;

        if (mat[low][col - 1] === target)
            return true;

        return BS.iBS(mat[low], 0, col - 1, target) !== -1;
    }

    public static main(): void {
        // add matrix
        const mat: number[][] = [
            [1, 2, 4, 8],
            [10, 11, 12, 13],
            [14, 20, 30, 40]
        ];
        const target: number = 30;

        // check if target within matrix
        let ans: boolean = src74.searchMatrix(mat, target);
        console.log((ans) ? "true" : "false");
    }
}

src74.main();