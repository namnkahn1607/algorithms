/* 17. letter combination of a phone number */
// #: backtracking
import { Queue } from "datastructures-js";

class src17 {
    // 1. backtracking
    letterCombinations(digits: string): string[] {
        const ans: string[] = [];
        const chars: string[] = [
            "+", "", "abc", "def", "ghi", "jkl",
            "mno", "pqrs", "tuv", "wxyz"
        ];

        const dfs = function(i: number, comp: string[]): void {
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

    // 2. iteration
    letterCombinations2(digits: string): string[] {
        if (digits === "") return [];

        const ans = new Queue<string>([""]);
        const chars: string[] = [
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

    public static main(): void {
        // add typed digits
        const digits: string = "24";

        // all possible letter combinations
        let ans1: string[] = new src17().letterCombinations(digits);
        console.log(ans1.join(" "));

        let ans2: string[] = new src17().letterCombinations2(digits);
        console.log(ans2.join(" "));
    }
}

src17.main();