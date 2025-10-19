/* 35. search insert position */

abstract class SearchInsert {
    abstract searchInsert(arr: number[], target: number): number;

    public static run(sol: SearchInsert): void {
        const arr: number[] = [-1, 0, 2, 4, 6, 8];
        const target: number = 5;

        console.log(sol.searchInsert(arr, target));
    }
}

export { SearchInsert };