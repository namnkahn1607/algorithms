/* 20. valid parentheses */
// #: stack

class src20 {
    isValid(str: string): boolean {
        const stack: string[] = [];
        const map = new Map<string, string>([
            [")", "("], ["]", "["], ["}", "{"]
        ]);

        for (const c of str) {
            const len = stack.length;

            if (map.has(c)) {
                if (len > 0 && stack[len - 1] === map.get(c))
                    stack.pop();
                else
                    return false;
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }

    public static main(): void {
        // add string
        const str: string = "(){[]}";

        // check if valid parentheses string
        let ans: boolean = new src20().isValid(str);
        console.log((ans) ? "true" : "false");
    }
}

src20.main();