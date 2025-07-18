/* 246. asteroid collision */
// #: stack

class src246b {
    static asteroidCollision(astr: number[]): number[] {
        const stack: number[] = [];

        for (let a of astr) {
            while (stack.length > 0 && a < 0 && stack[stack.length - 1] > 0) {
                const sum = stack[stack.length - 1] + a;

                if (sum > 0) {
                    a = 0;
                    break;
                } else if (sum === 0) {
                    a = 0; stack.pop();
                    break;
                } else {
                    stack.pop();
                }
            }

            if (a !== 0)
                stack.push(a);
        }

        return stack;
    }

    public static main(): void {
        // add asteroids
        const astr: number[] = [2, 4, -4, -1];

        // asteroids remaining
        let ans: number[] = src246b.asteroidCollision(astr);
        console.log(ans.join(" "));
    }
}

src246b.main();