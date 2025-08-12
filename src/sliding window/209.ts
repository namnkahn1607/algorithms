/* 209. minimum subarray sum */
// #: sliding window

class src209 {
    minSubArrayLen(target: number, arr: number[]): number {
        const m: number = arr.length;
        let l = 0;
        let ans = m + 1;
        let sum = 0;

        for (let r = 0; r < m; ++r) {
            sum += arr[r];

            while (sum >= target) {
                ans = Math.min(ans, r - l + 1);
                sum -= arr[l++];
            }
        }

        return (ans === m + 1) ? 0 : ans;
    }

    public static main(): void {
        // add array & target
        const arr: number[] = [2, 1, 5, 1, 5, 3];
        const target: number = 10;

        // calculate the shortest satisfied subarray
        let ans: number = new src209().minSubArrayLen(target, arr);
        console.log(ans);
    }
}

src209.main();