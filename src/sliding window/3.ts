/* 3. longest substring without repeating character */
// #: sliding window + hash

class src3 {
    lengthOfLongestSubstring(str: string): number {
        const m: number = str.length;
        const map = new Map<string, number>();
        let l = 0, ans = 0;

        for (let r = 0; r < m; ++r) {
            if (map.has(str[r]))
                l = Math.max(l, map.get(str[r])! + 1);

            map.set(str[r], r);
            ans = Math.max(ans, r - l + 1);
        }

        return ans;
    }

    public static main(): void {
        // add string
        const str: string = "zxyzyxz";

        // maxima length substring of non-repeating chars
        let ans: number = new src3().lengthOfLongestSubstring(str);
        console.log(ans);
    }
}

src3.main();