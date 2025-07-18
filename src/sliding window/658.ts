/* 658a. find k closest elements */
// #: sliding window

class src658 {
    static findClosestElements(arr: number[], k: number, x: number): number[] {
        const m: number = arr.length;
        let l = 0;

        for (let r = k; r < m; ++r) {
            if (Math.abs(arr[r] - x) < Math.abs(arr[l] - x))
                l = r - k + 1;
        }

        return arr.slice(l, l + k);
    }

    public static main(): void {
        // add array & argument k
        const arr: number[] = [2, 4, 5, 8];
        const k: number = 2;
        const x: number = 6;

        // find k closest values to x
        let ans: number[] = src658.findClosestElements(arr, k, x);
        console.log(ans.join(" "));
    }
}

src658.main();

// more sols at: https://neetcode.io/solutions/find-k-closest-elements