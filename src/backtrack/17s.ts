/* 17. letter combination of a phone number */
// #: backtracking

class src17 {
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

    public static main(): void {
        // add typed digits
        const digits: string = "24";

        // all possible letter combinations
        let ans: string[] = new src17().letterCombinations(digits);
        console.log(ans.join(" "));
    }
}

src17.main();

// more sols at: https://neetcode.io/solutions/letter-combinations-of-a-phone-number