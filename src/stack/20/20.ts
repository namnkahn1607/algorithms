/* 20. valid parentheses */
// @: stack
import { Parentheses } from "./run";
import { Stack } from "datastructures-js";

class A extends Parentheses {
    isValid(str: string): boolean {
        const stack = new Stack<string>();
        const map = new Map<string, string>([
            [")", "("], ["]", "["], ["}", "{"]
        ]);

        for (const c of str) {
            if (map.has(c)) {
                if (!stack.isEmpty() && stack.peek() === map.get(c))
                    stack.pop();
                else
                    return false;
            } else {
                stack.push(c);
            }
        }

        return stack.isEmpty();
    }
}

A.run(new A());