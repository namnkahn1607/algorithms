/* 28a. needle in haystack */
// #: 2 pointers

class src28a {
    static strStr(haystack: string, needle: string): number {
        const m: number = haystack.length;
        const n: number = needle.length;
        let [i, j] = [0, 0];

        while (i < m) {
            if (haystack[i] === needle[j])
                ++j;
            else {
                i -= j;
                j = 0;
            }

            if (j === n)
                return i - n + 1;

            ++i;
        }

        return -1;
    }

    public static main(): void {
        // add needle & haystack
        const haystack: string = "neetcodeneetcode";
        const needle: string = "neet";

        // check if needle exist within haystack
        let ans: number = src28a.strStr(haystack, needle);
        console.log(ans);
    }
}

src28a.main();