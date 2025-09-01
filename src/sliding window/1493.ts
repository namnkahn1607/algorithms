/* 1493. longest subarray of 1's after deleting one element */
// #: sliding window

class src1493 {
    longestSubarray(nums: number[]): number {
        let [ans, zeroCount] = [0, 0];
        let L = 0;

        for (let R = 0; R < nums.length; ++R) {
            if (nums[R] === 0) ++zeroCount;

            while (L < R && zeroCount > 1) {
                zeroCount -= (nums[L] === 0) ? 1 : 0;
                ++L;
            }

            ans = Math.max(ans, R - L);
        }

        return ans;
    }

    public static main(): void {
        // add array
        const arr: number[] = [0, 1, 1, 1, 0, 1, 1, 0, 1];

        // maxima length of 1's
        let ans: number = new src1493().longestSubarray(arr);
        console.log(ans);
    }
}

src1493.main();

// linked problems: 1004