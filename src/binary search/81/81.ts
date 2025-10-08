/* 81. search in rotated sorted array 2 */
// @: binary search
import { SearchRotated2 } from "./main";

class A extends SearchRotated2 {
    search(nums: number[], target: number): boolean {
        let [L, R] = [0, nums.length - 1];

        while (L <= R) {
            const M = L + Math.trunc((R - L) / 2);

            if (nums[M] === target)
                return true;

            if (nums[L] < nums[M]) {
                if (nums[L] <= target && target < nums[M])
                    R = M - 1;
                else
                    L = M + 1;

            } else if (nums[L] > nums[M]) {
                if (nums[M] < target && target <= nums[R])
                    L = M + 1;
                else
                    R = M - 1;

            } else {
                ++L;
            }
        }

        return false;
    }
}

A.run(new A());