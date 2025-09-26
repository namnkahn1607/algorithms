/* 17a. letter combination of a phone number */
// @: backtrack
import { LetterCombination } from "./main";

class A extends LetterCombination {
    letterCombinations(digits: string): string[] {
        const ans: string[] = [];
        const chars = [
            "+", "", "abc", "def", "ghi", "jkl",
            "mno", "pqrs", "tuv", "wxyz"
        ];

        const dfs = (i: number, comp: string[]): void => {
            if (i >= digits.length) {
                if (comp.length > 0)
                    ans.push(comp.join(""));

                return;
            }

            const char = chars[Number(digits[i])];

            for (const c of char) {
                comp.push(c);
                dfs(i + 1, comp);
                comp.pop();
            }
        };

        dfs(0, []);

        return ans;
    }
}

A.run(new A());