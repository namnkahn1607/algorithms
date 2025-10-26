/* 3a. longest substr without repeating chars */
// @: sliding window

class A {
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
}

export { A };