/* 20a. valid parentheses */
// @: stack
import { Stack } from "datastructures-js";

class A {
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

export { A };