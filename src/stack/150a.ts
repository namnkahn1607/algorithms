/* 150a. evaluate reverse polish notation */
// #: stack

class src150a {
    evaluateRPN(tokens: string[]): number {
        const args: number[] = [];

        for (const token of tokens) {
            switch (token) {
                case "+": {
                    const b = args.pop()!;
                    const a = args.pop()!;
                    args.push(a + b);
                    break;
                }

                case "-": {
                    const b = args.pop()!;
                    const a = args.pop()!;
                    args.push(a - b);
                    break;
                }

                case "*": {
                    const b = args.pop()!;
                    const a = args.pop()!;
                    args.push(a * b);
                    break;
                }

                case "/": {
                    const b = args.pop()!;
                    const a = args.pop()!;
                    args.push(Math.trunc(a / b));
                    break;
                }

                default:
                    args.push(Number.parseInt(token));
            }
        }

        return args[0];
    }

    public static main(): void {
        // add tokens
        const tokens: string[] = ["1", "2", "+", "3", "*", "4", "-"];

        // evaluate RPN
        let ans: number = new src150a().evaluateRPN(tokens);
        console.log(ans);
    }
}

src150a.main();

// more sols at: https://neetcode.io/solutions/evaluate-reverse-polish-notation