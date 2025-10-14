/* 17a. letter combination of a phone number */

abstract class LetterCombination {
    abstract letterCombinations(digits: string): string[];

    public static run(sol: LetterCombination): void {
        const digits: string = "24";
        console.log(sol.letterCombinations(digits).join(" "));
    }
}

export { LetterCombination };