/* 209. minimum size subarray sum */

abstract class MinSubarraySum {
    abstract minSubarrayLen(arr: number[], target: number): number;

    public static run(sol: MinSubarraySum): void {
        const arr: number[] = [2, 1, 5, 1, 5, 3];
        const target: number = 10;

        console.log(sol.minSubarrayLen(arr, target));
    }
}

export { MinSubarraySum };