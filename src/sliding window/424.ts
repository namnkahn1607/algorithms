/* 424. longest repeating character replacement */
// #: sliding window + hash

class src424 {
    characterReplacement(str: string, k: number): number {
        const base: number = 'A'.charCodeAt(0);
        const m: number = str.length;

        const freq: number[] = new Array<number>(26).fill(0);
        let l = 0;
        let mostFreq = 0;
        let ans = 0;

        for (let r = 0; r < m; ++r) {
            const x: number = str[r].charCodeAt(0) - base;

            ++freq[x];
            mostFreq = Math.max(mostFreq, freq[x])

            if (r - l + 1 - mostFreq > k)
                --freq[str[l++].charCodeAt(0) - base];

            ans = Math.max(ans, r - l + 1);
        }

        return ans;
    }

    public static main(): void {
        // add string & k
        const str: string = "AAAAABBCCBB";
        const k: number = 2;

        // calculate maxima length k-pos-replaced string
        let ans: number = new src424().characterReplacement(str, k);
        console.log(ans);
    }
}

src424.main();

// explanation at: https://neetcode.io/solutions/longest-repeating-character-replacement