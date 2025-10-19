/* 4. median of 2 sorted arrays */
// @: binary search
import { MedianSorted } from "./run";

class A extends MedianSorted {
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const [sz1, sz2] = [nums1.length, nums2.length];

        if (sz1 > sz2) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        const median = (k: number): number => {
            let [L, R] = [0, sz1];

            while (L <= R) {
                const i = L + Math.trunc((R - L) / 2);
                const j = k + 1 - i;

                if (j < 0) { R = i - 1; continue; }
                if (j > sz2) { L = i + 1; continue; }

                const aLeft = (i > 0) ? nums1[i - 1] : Number.MIN_SAFE_INTEGER;
                const bLeft = (j > 0) ? nums2[j - 1] : Number.MIN_SAFE_INTEGER;
                const aRight = (i < sz1) ? nums1[i] : Number.MAX_SAFE_INTEGER;
                const bRight = (j < sz2) ? nums2[j] : Number.MAX_SAFE_INTEGER;

                if (aLeft <= bRight && bLeft <= aRight) {
                    return Math.max(aLeft, bLeft);
                } else if (aLeft > bRight) {
                    R = i - 1;
                } else {
                    L = i + 1;
                }
            }

            return -1;
        };

        const size = sz1 + sz2;

        if (size % 2 === 0) {
            const fst = median(Math.trunc((size - 1) / 2));
            const sec = median(size / 2);

            return (fst + sec) / 2;
        }

        return median((size - 1) / 2);
    }
}

A.run(new A());