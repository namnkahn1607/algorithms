/* 22b. generate parentheses */
// @: backtrack
import { ParenthesisGen } from "./run";

class B extends ParenthesisGen {
    generateParenthesis(n: number): string[] {
        const ans: string[] = [];
        let str: string[] = [];

        const dfs = (arg: number[]): void => {
            const [open, close] = arg;

            if (open === close && open === n) {
                ans.push(str.join(""));
                return;
            }

            if (open < n) {
                str.push("(");
                dfs([open + 1, close]);
                str.pop();
            }

            if (close < open) {
                str.push(")");
                dfs([open, close + 1]);
                str.pop();
            }
        };

        dfs([0, 0]);

        return ans;
    }
}

B.run(new B());