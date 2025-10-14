/* 41. first missing positive */

abstract class FirstMiss {
    abstract firstMissingPositive(nums: number[]): number;

    public static run(sol: FirstMiss): void {
        const nums: number[] = [1, 2, 6, 4, 5];

        console.log(sol.firstMissingPositive(nums));
    }
}

export { FirstMiss };