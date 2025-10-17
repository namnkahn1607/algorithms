/* 20. valid parentheses */

abstract class Parentheses {
    abstract isValid(str: string): boolean;

    public static run(sol: Parentheses): void {
        const str: string = "(){[]}";
        console.log(sol.isValid(str));
    }
}

export { Parentheses };