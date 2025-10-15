/* 424a. longest repeating character replacement */
// @: sliding window + hash
import { CharReplace } from "./run";

class A extends CharReplace {
    characterReplacement(str: string, k: number): number {
        const base = 'A'.charCodeAt(0);

        const freq = new Array(26).fill(0);
        let L = 0;
        let mostFreq = 0;
        let ans = 0;

        for (let R = 0; R < str.length; ++R) {
            const x = str[R].charCodeAt(0) - base;

            ++freq[x];
            mostFreq = Math.max(mostFreq, freq[x]);

            if (R - L + 1 - mostFreq > k)
                --freq[str[L++].charCodeAt(0) - base];

            ans = Math.max(ans, R - L + 1);
        }

        return ans;
    }
}

A.run(new A());