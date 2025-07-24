/* 88. merge sorted arrays */
// #: 2 pointers

class src88 {
    static merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let [i, j, k] = [m - 1, n - 1, m + n - 1];

        while (i >= 0 && j >= 0) {
            if (nums1[i] >= nums2[j])
                nums1[k--] = nums1[i--];
            else
                nums1[k--] = nums2[j--];
        }

        while (i >= 0)
            nums1[k--] = nums1[i--];

        while (j >= 0)
            nums1[k--] = nums2[j--];
    }

    public static main(): void {
        // add arrays
        const nums1: number[] = [10, 20, 20, 40];
        const nums2: number[] = [1, 2];
        const [m, n] = [nums1.length, nums2.length];

        for (let i = 0; i < n; ++i)
            nums1.push(0);

        // merge 2 sorted arrays into one
        src88.merge(nums1, m, nums2, n);

        console.log(nums1.join(" "));
    }
}

src88.main();