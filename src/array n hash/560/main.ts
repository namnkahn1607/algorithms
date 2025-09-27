/* 560. subarray sum equals k */

abstract class SubarraySumK {
    abstract subarraySum(arr: number[], k: number): number;

    public static run(sol: SubarraySumK): void {
        const arr: number[] = [10, 5, 3, -2];
        const k: number = 8;

        console.log(sol.subarraySum(arr, k));
    }
}

export { SubarraySumK };