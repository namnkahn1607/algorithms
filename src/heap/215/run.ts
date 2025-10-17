/* 215. k-th largest element in array */

abstract class ArrayKth {
    abstract findKthLargest(nums: number[], k: number): number;

    public static run(sol: ArrayKth): void {
        const arr: number[] = [2, 3, 1, 1, 5, 5, 4];
        const k: number = 3;

        console.log(sol.findKthLargest(arr, k));
    }
}

export { ArrayKth };