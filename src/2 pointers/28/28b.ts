/* 28b. needle in haystack */
// @: Knuth Morris Pratt

class B {
    strStr(haystack: string, needle: string): number {
        if (needle === "") return 0;

        const [m, n] = [haystack.length, needle.length];

        const LPS = new Array<number>(n).fill(0);
        let [prevLPS, j] = [0, 1];

        while (j < n) {
            if (needle[j] === needle[prevLPS]) {
                LPS[j] = prevLPS + 1;
                ++prevLPS; ++j;
            } else if (prevLPS === 0) {
                LPS[j++] = 0;
            } else {
                prevLPS = LPS[prevLPS - 1];
            }
        }

        let i = j = 0;

        while (i < m) {
            if (haystack[i] === needle[j]) {
                ++i; ++j;
            } else if (j === 0) {
                ++i;
            } else {
                j = LPS[j - 1];
            }

            if (j === n) {
                return i - n;
            }
        }

        return -1;
    }
}

export { B };