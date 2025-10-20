/* 1456. maxima number of vowels in a substr */
// @: sliding window
import { VowelSequence } from "./run";

class A extends VowelSequence {
    maxVowels(str: string, k: number): number {
        let [ans, cnt] = [0, 0];
        let L = 0;

        for (let R = 0; R < str.length; ++R) {
            if ("aeiou".includes(str[R]))
                ++cnt;

            if (R - L + 1 === k) {
                ans = Math.max(ans, cnt);

                if ("aeiou".includes(str[L]))
                    --cnt;

                ++L;
            }
        }

        return ans;
    }
}

A.run(new A());