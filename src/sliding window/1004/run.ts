/* 1004. max consecutive ones 3 */

abstract class Consecutive {
    abstract longestOnes(nums: number[], k: number): number;

    public static run(sol: Consecutive): void {
        const arr: number[] = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
        const k: number = 2;

        console.log(sol.longestOnes(arr, k));
    }
}

export { Consecutive };