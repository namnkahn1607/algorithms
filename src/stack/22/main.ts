/* 22. generate parentheses */

abstract class ParenthesisGen {
    abstract generateParenthesis(n: number): string[];

    public static run(sol: ParenthesisGen): void {
        const N: number = 2;
        console.log(sol.generateParenthesis(N).join(" "));
    }
}

export { ParenthesisGen };