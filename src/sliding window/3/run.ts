/* 3. longest substr without repeating chars */

abstract class NonRepeatingSubstr {
    abstract lengthOfLongestSubstring(str: string): number;

    public static run(sol: NonRepeatingSubstr): void {
        const str: string = "zxyzzxyz";
        console.log(sol.lengthOfLongestSubstring(str));
    }
}

export { NonRepeatingSubstr };