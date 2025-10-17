/* 215b. k-th largest element in array */
// @: quickselect
import { ArrayKth } from "./run";

class B extends ArrayKth {
    findKthLargest(nums: number[], k: number): number {
        const swap = (i: number, j: number) =>
            [nums[i], nums[j]] = [nums[j], nums[i]];

        const partition = (L: number, R: number): number => {
            const median = (): number => {
                const M = L + Math.trunc((R - L) / 2);

                if (nums[L] < nums[M]) swap(L, M);
                if (nums[L] < nums[R]) swap(L, R);
                if (nums[M] < nums[R]) swap(M, R);

                swap(L + 1, M);

                return nums[L + 1];
            };

            const pivot = median();
            let [i, j] = [L + 1, R];

            while (true) {
                while (true) {
                    if (nums[++i] <= pivot)
                        break;
                }

                while (true) {
                    if (nums[--j] >= pivot)
                        break;
                }

                if (i > j) break;
                swap(i, j);
            }

            swap(L + 1, j);

            return j;
        };

        let [L, R] = [0, nums.length - 1];
        --k;

        while (true) {
            if (L + 1 >= R) {
                if (L + 1 === R && nums[L] < nums[R])
                    swap(L, R);

                return nums[k];
            }

            const pivot = partition(L, R);

            if (pivot >= k) R = pivot - 1;
            if (pivot <= k) L = pivot + 1;
        }
    }
}

B.run(new B());