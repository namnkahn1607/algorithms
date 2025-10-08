/* 81. search in rotated sorted array 2 */

abstract class SearchRotated2 {
    abstract search(nums: number[], target: number): boolean;

    public static run(sol: SearchRotated2): void {
        const nums: number[] = [3, 4, 4, 5, 6, 1, 2, 2];
        const target: number = 1;

        console.log(sol.search(nums, target));
    }
}

export { SearchRotated2 };