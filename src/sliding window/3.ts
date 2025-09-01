/* 3. longest substr without repeating characters */
// #: sliding window

class src3 {
    lengthOfLongestSubstring(str: string): number {
        const map = new Map<string, number>();
        let [ans, L] = [0, 0];

        for (let R = 0; R < str.length; ++R) {
            if (map.has(str[R]))
                L = Math.max(L, map.get(str[R])! + 1);

            map.set(str[R], R);

            ans = Math.max(ans, R - L + 1);
        }

        return ans;
    }

    public static main(): void {
        // add string
        const str: string = "zxyzzxyz";

        // calculate maxima distinct substr size
        let ans: number = new src3().lengthOfLongestSubstring(str);
        console.log(ans);
    }
}

src3.main();