/* 680. valid palindrome II */
// #: 2 pointers
import { palindrome } from "../addons";

class src680 {
    static validPalindrome(str: string): boolean {
        let l = 0, r = str.length - 1;

        while (l < r) {
            if (str[l] !== str[r])
                return palindrome(str, l + 1, r) || palindrome(str, l, r - 1);

            ++l; --r;
        }
        
        return true;
    }

    public static main(): void {
        // add string
        const str: string = "abbdba";

        // check if almost palindrome
        let ans: boolean = src680.validPalindrome(str);
        console.log((ans) ? "true" : "false");
    }
}

src680.main();