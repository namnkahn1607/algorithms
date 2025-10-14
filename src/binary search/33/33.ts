/* 33. search in rotated sorted array */
// @: binary search
import { SearchRotated } from "./run";

class A extends SearchRotated {
    search(nums: number[], target: number): number {
        let [L, R] = [0, nums.length - 1];

        while (L <= R) {
            const M = L + Math.trunc((R - L) / 2);

            if (nums[M] === target)
                return M;

            if (nums[L] <= nums[M]) {
                if (nums[L] <= target && target <= nums[M])
                    R = M - 1;
                else
                    L = M + 1;

            } else {
                if (nums[M] <= target && target <= nums[R])
                    L = M + 1;
                else
                    R = M - 1;
            }
        }

        return -1;
    }
}

A.run(new A());