/* 1493. longest subarray of 1's after delete 1 element */

abstract class OneSequence {
    abstract longestSubarray(nums: number[]): number;

    public static run(sol: OneSequence): void {
        const arr: number[] = [0, 1, 1, 1, 0, 1, 1, 0, 1];

        console.log(sol.longestSubarray(arr));
    }
}

export { OneSequence };