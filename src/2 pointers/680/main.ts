/* 680. valid palindrome 2 */

abstract class ValidPalindrome {
    abstract validPalindrome(str: string): boolean;

    public static run(sol: ValidPalindrome): void {
        const str: string = "abbdba";
        console.log(sol.validPalindrome(str));
    }
}

export { ValidPalindrome };