/* 28a. needle in haystack */
// @: 2 pointers
import { NeedleHaystack } from "./main";

class A extends NeedleHaystack {
    strStr(haystack: string, needle: string): number {
        const [m, n] = [haystack.length, needle.length];
        let j = 0;

        for (let i = 0; i < m; ++i) {
            if (haystack[i] === needle[j]) {
                ++j;
            } else {
                i -= j;
                j = 0;
            }

            if (j === n)
                return i - n + 1;
        }

        return -1;
    }
}

A.run(new A());