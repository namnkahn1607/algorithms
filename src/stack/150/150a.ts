/* 150a. evaluate reverse polish notation */
// @: stack
import { RPN } from "./run";
import { Stack } from "datastructures-js";

class A extends RPN {
    evaluateRPN(tokens: string[]): number {
        const args = new Stack<number>()
        const ops: Record<string, (a: number, b: number) => number> = {
            "+": (a, b) => b + a,
            "-": (a, b) => b - a,
            "*": (a, b) => b * a,
            "/": (a, b) => Math.trunc(b / a)
        };

        for (const token of tokens) {
            if (token in ops) {
                const a = args.pop()!;
                const b = args.pop()!;
                args.push(ops[token](a, b));
            } else {
                args.push(Number.parseInt(token));
            }
        }

        return args.peek()!;
    }
}

A.run(new A());