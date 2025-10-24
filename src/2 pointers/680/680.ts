/* 680. valid palindrome II */
// @: 2 pointers

class A {
    validPalindrome(str: string): boolean {
        const palindrome = (L: number, R: number): boolean => {
            while (L < R) {
                if (str[L] !== str[R])
                    return false;

                ++L; --R;
            }

            return true;
        };

        let [L, R] = [0, str.length - 1];

        while (L < R) {
            if (str[L] !== str[R])
                return palindrome(L + 1, R) || palindrome(L, R - 1);

            ++L; --R;
        }

        return true;
    }
}

export { A };