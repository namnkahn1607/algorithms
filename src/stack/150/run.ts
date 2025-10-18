/* 150. evaluate reverse polish notation */

abstract class RPN {
    abstract evaluateRPN(tokens: string[]): number;

    public static run(sol: RPN): void {
        const tokens: string[] = [
            "1", "2", "+", "3", "*", "4", "-"
        ];

        console.log(sol.evaluateRPN(tokens));
    }
}

export { RPN };