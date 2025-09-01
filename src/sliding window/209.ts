/* 209. minimum size subarray sum */
// #: sliding window

class src209 {
    minSubarrayLen(arr: number[], target: number): number {
        const m: number = arr.length;
        let ans = m + 1;
        let [sum, L] = [0, 0];

        for (let R = 0; R < m; ++R) {
            sum += arr[R];

            while (sum >= target) {
                ans = Math.min(ans, R - L + 1);
                sum -= arr[L];
                ++L;
            }
        }

        return (ans === m + 1) ? 0 : ans;
    }

    public static main(): void {
        // add array & target
        const arr: number[] = [2, 1, 5, 1, 5, 3];
        const target: number = 10;

        // calculate minima size satisfied subarray
        let ans: number = new src209().minSubarrayLen(arr, target);
        console.log(ans);
    }
}

src209.main();