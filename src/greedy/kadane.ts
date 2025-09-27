/* algorithms: Kadane's algorithm */

class Kadane {
    public static maxSubarraySum(arr: number[]): number {
        if (arr?.length === 0) return NaN;

        let [maxSum, curSum] = [arr[0], 0];

        for (const x of arr) {
            curSum = Math.max(curSum, 0);
            curSum += x;
            maxSum = Math.max(maxSum, curSum);
        }

        return maxSum;
    }
}

export { Kadane };