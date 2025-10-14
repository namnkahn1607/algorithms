/* 17b. letter combination of a phone number */
// @: iteration
import { LetterCombination } from "./run";
import { Queue } from "datastructures-js";

class B extends LetterCombination {
    letterCombinations(digits: string): string[] {
        if (digits === "") return [];

        const ans = new Queue<string>([""]);
        const chars = [
            "+", "", "abc", "def", "ghi", "jkl",
            "mno", "pqrs", "tuv", "wxyz"
        ];

        for (let i = 0; i < digits.length; ++i) {
            const char = chars[Number(digits[i])];
            const len = ans.size();

            for (let i = 0; i < len; ++i) {
                const cur = ans.dequeue()!;

                for (const c of char)
                    ans.enqueue(cur + c);
            }
        }

        return ans.toArray();
    }
}

B.run(new B());