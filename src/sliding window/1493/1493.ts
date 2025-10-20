/* 1493. longest subarray of 1's after deleting 1 element */
// @: sliding window
import { OneSequence } from "./run";

class A extends OneSequence {
    longestSubarray(nums: number[]): number {
        let [ans, zeroes] = [0, 0];
        let L = 0;

        for (let R = 0; R < nums.length; ++R) {
            if (nums[R] === 0)
                ++zeroes;

            while (L < R && zeroes > 1) {
                if (nums[L] === 0)
                    --zeroes;

                ++L;
            }

            ans = Math.max(ans, R - L);
        }

        return ans;
    }
}

A.run(new A());