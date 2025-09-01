/* 1004. max consecutive ones 3 */
// #: sliding window

class src1004 {
    longestOnes(nums: number[], k: number): number {
        let [ans, zeroCount] = [0, 0];
        let L = 0;

        for (let R = 0; R < nums.length; ++R) {
            if (nums[R] === 0) ++zeroCount;

            while (L <= R && zeroCount > k) {
                zeroCount -= (nums[L] === 0) ? 1 : 0;
                ++L;
            }

            ans = Math.max(ans, R - L + 1);
        }

        return ans;
    }

    public static main(): void {
        // add array
        const arr: number[] = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
        const k: number = 2;

        // maxima length of 1's
        let ans: number = new src1004().longestOnes(arr, k);
        console.log(ans);
    }
}

src1004.main();

// linked problem: 1493