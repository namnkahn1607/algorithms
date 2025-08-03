/* 28b. needle in haystack */
// #: algorithms + prefix/suffix

class src28b {
    /* Knuth-Morris-Pratt algorithm */
    static strStr(haystack: string, needle: string): number {
        if (needle === "") return 0;

        const m: number = haystack.length;
        const n: number = needle.length;

        const lps = new Array<number>(n).fill(0);
        let [prevLPS, j] = [0, 1];

        while (j < n) {
            if (needle[j] === needle[prevLPS]) {
                lps[j] = prevLPS + 1;
                ++prevLPS; ++j;
            } else if (prevLPS === 0) {
                lps[j++] = 0;
            } else {
                prevLPS = lps[prevLPS - 1];
            }
        }

        let i = j = 0;

        while (i < m) {
            if (haystack[i] === needle[j]) {
                ++i; ++j;
            } else if (j === 0) {
                ++i;
            } else {
                j = lps[j - 1];
            }

            if (j === n)
                return i - n;
        }

        return -1;
    }

    public static main(): void {
        // add needle & haystack
        const haystack: string = "needcodeneetcode";
        const needle: string = "neet";

        // search for needle within haystack
        let ans: number = src28b.strStr(haystack, needle);
        console.log(ans);
    }
}

src28b.main();

// even more sols: https://neetcode.io/solutions/find-the-index-of-the-first-occurrence-in-a-string