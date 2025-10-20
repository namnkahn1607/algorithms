/* 1004. max consecutive ones III */
// @: sliding window
import { Consecutive } from "./run";

class A extends Consecutive {
    longestOnes(nums: number[], k: number): number {
        let [ans, zeroes] = [0, 0];
        let L = 0;

        for (let R = 0; R < nums.length; ++R) {
            if (nums[R] === 0)
                ++zeroes;

            while (L <= R && zeroes > k) {
                zeroes -= (nums[L] === 0) ? 1 : 0;
                ++L;
            }

            ans = Math.max(ans, R - L + 1);
        }

        return ans;
    }
}

A.run(new A());