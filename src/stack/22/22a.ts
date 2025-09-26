/* 22a. generate parentheses */
// @: stack
import { ParenthesisGen } from "./main";
import { Stack } from "datastructures-js";

class A extends ParenthesisGen {
    generateParenthesis(n: number): string[] {
        const stack = new Stack<[string, number, number]>();
        stack.push(["", 0, 0]);

        const ans: string[] = [];

        while (!stack.isEmpty()) {
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
}

A.run(new A());