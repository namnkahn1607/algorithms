/* 22a. generate parentheses */
// #: stack

class src22a {
    generateParenthesis(n: number): string[] {
        const stack: [string, number, number][] = [["", 0, 0]];
        const ans: string[] = [];

        while (stack.length) {
            const [str, open, close] = stack.pop()!;

            if (str.length === 2 * n) {
                ans.push(str);
            } else {
                if (open < n) stack.push([str + "(", open + 1, close]);
                if (close < open) stack.push([str + ")", open, close + 1]);
            }
        }

        return ans;
    }

    public static main(): void {
        // add number of pairs
        const N: number = 2;

        // create all parenthesis combinations
        let ans: string[] = new src22a().generateParenthesis(N);
        console.log(ans.join(" "));
    }
}

src22a.main();

// dp solution: https://neetcode.io/solutions/generate-parentheses