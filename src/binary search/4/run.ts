/* 4. median of 2 sorted arrays */

abstract class MedianSorted {
    abstract findMedianSortedArrays(nums1: number[], nums2: number[]): number;

    public static run(sol: MedianSorted): void {
        const nums1: number[] = [1, 3, 5, 7, 9];
        const nums2: number[] = [2, 4, 6, 8, 10, 12];

        console.log(sol.findMedianSortedArrays(nums1, nums2));
    }
}

export { MedianSorted };