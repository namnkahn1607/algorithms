/* 74. search a 2D matrix */

abstract class MatrixSearch {
    abstract searchMatrix(mat: number[][], target: number): boolean;

    public static run(sol: MatrixSearch): void {
        const mat: number[][] = [
            [1, 2, 4, 8],
            [10, 11, 12, 13],
            [14, 20, 30, 40]
        ];

        const target: number = 30;

        console.log(sol.searchMatrix(mat, target));
    }
}

export { MatrixSearch };