/* 33. search in rotated sorted array */

abstract class SearchRotated {
    abstract search(nums: number[], target: number): number;

    public static run(sol: SearchRotated): void {
        const nums: number[] = [3, 4, 5, 6, 1, 2];
        const target: number = 1;

        console.log(sol.search(nums, target));
    }
}

export { SearchRotated };