/* 22b. generate parentheses */
// #: backtrack

class src22b {
    generateParenthesis(n: number): string[] {
        const ans: string[] = [];
        let str: string[] = [];

        const dfs = function(open: number, close: number): void {
            if (open === close && open === n) {
                ans.push(str.join(""));
                return;
            }

            if (open < n) {
                str.push("(");
                dfs(open + 1, close);
                str.pop();
            }

            if (close < open) {
                str.push(")");
                dfs(open, close + 1);
                str.pop();
            }
        };

        dfs(0, 0);

        return ans;
    }

    public static main(): void {
        // add number of pairs
        const N: number = 2;

        // create all parenthesis combinations
        let ans: string[] = new src22b().generateParenthesis(N);
        console.log(ans.join(" "));
    }
}

src22b.main();