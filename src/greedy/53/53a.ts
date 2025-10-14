/* 53a. maximum subarray */
// @: greedy (Kadane)
import { MaximumSubarray } from "./run";
import { Kadane } from "../kadane";

class A extends MaximumSubarray {
    maxSubarray(arr: number[]): number {
        return Kadane.maxSubarraySum(arr);
    }
}

A.run(new A());