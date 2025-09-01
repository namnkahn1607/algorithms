/* 1456. maxima number of vowels in a substr of given length */
// #: sliding window

class src1456 {
    maxVowels(str: string, k: number): number {
        let [ans, count] = [0, 0];
        let L = 0;

        for (let R = 0; R < str.length; ++R) {
            count += ("aeiou".includes(str[R])) ? 1 : 0;

            if (R - L + 1 === k) {
                ans = Math.max(ans, count);
                count -= ("aeiou".includes(str[L])) ? 1 : 0;
                ++L;
            }
        }

        return ans;
    }

    public static main(): void {
        // add string
        const str: string = "abciiidef";
        const k: number = 3;

        // maxima vowels within substr of size k
        let ans: number = new src1456().maxVowels(str, k);
        console.log(ans);
    }
}

src1456.main();