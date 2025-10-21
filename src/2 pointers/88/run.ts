/* 88. merge sorted arrays */

abstract class MergeSorted {
    abstract merge(
        nums1: number[], m: number, nums2: number[], n: number
    ): void;

    public static run(sol: MergeSorted): void {
        const nums1: number[] = [10, 20, 20, 40];
        const nums2: number[] = [1, 2];

        const [m, n] = [nums1.length, nums2.length];

        for (let i = 0; i < n; ++i)
            nums1.push(0);

        sol.merge(nums1, m, nums2, n);
        console.log(nums1.join(" "));
    }
}

export { MergeSorted };