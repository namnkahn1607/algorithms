/* 150b. evaluate reverse polish notation */
// @: abstract syntax tree
import { RPN } from "./run";

class B extends RPN {
    evaluateRPN(tokens: string[]): number {
        if (tokens.length === 0)
            return NaN;

        const dfs = (): number => {
            const token = tokens.pop()!;

            if (!"+-*/".includes(token))
                return Number(token);

            const [right, left] = [dfs(), dfs()];

            switch (token) {
                case "+": return left + right;
                case "-": return left - right;
                case "*": return left * right;
                case "/": return Math.trunc(left / right);
                default: return NaN;
            }
        };

        return dfs();
    }
}

B.run(new B());