/* 238. product of array except self */
// #: array + prefix/suffix

class src238 {
    static productExceptSelf(arr: number[]): number[] {
        const m: number = arr.length;
        const ans: number[] = new Array<number>(m).fill(1);
        let prefix = 1, suffix = 1;

        for (let i = 1; i < m; ++i) {
            prefix *= arr[i - 1];
            ans[i] *= prefix;
        }

        for (let i = m - 2; i >= 0; --i) {
            suffix *= arr[i + 1];
            ans[i] *= suffix;
        }

        return ans;
    }

    public static main(): void {
        // add array
        const arr: number[] = [-1, 0, 1, 2, 3];

        // calculate product for each pos
        let ans: number[] = src238.productExceptSelf(arr);
        console.log(ans.join(" "));
    }
}

src238.main();