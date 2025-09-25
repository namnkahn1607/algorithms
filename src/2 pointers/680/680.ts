/* 680. valid palindrome 2 */
// @: 2 pointers
import { ValidPalindrome } from "./main";

class A extends ValidPalindrome {
    validPalindrome(str: string): boolean {
        const palindrome = function(L: number, R: number): boolean {
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

A.run(new A());