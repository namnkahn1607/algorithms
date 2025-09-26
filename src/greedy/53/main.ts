/* 53. maximum subarray */

abstract class MaximumSubarray {
    abstract maxSubarray(arr: number[]): number;

    public static run(sol: MaximumSubarray): void {
        const arr: number[] = [4, -1, 2, -7, 3, 4];
        console.log(sol.maxSubarray(arr));
    }
}

export { MaximumSubarray as MaximumSubarray };