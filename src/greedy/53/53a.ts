/* 53a. maximum subarray */
// @: greedy (Kadane)
import { Kadane } from "../kadane";

class A {
    maxSubarray(arr: number[]): number {
        return Kadane.maxSubarraySum(arr);
    }
}

export { A };