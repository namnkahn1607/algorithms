/* 209a. minimum size subarray sum */
// @: sliding window

class A {
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
}

export { A };