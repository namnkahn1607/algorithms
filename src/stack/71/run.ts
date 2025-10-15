/* 71. simplify path */

abstract class Simplification {
    abstract simplifyPath(path: string): string;

    public static run(sol: Simplification): void {
        const path: string = "/..//_home/a/b/..///";
        console.log(sol.simplifyPath(path));
    }
}

export { Simplification };