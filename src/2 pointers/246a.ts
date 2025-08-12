/* 246a. asteroid collision */
// #: 2 pointers + dp

class src246a {
    asteroidCollision(astr: number[]): number[] {
        let i = -1;

        for (let a of astr) {
            while (i >= 0 && a < 0 && astr[i] > 0) {
                if (astr[i] > -a) {
                    a = 0;
                    break;
                } else if (astr[i] === -a) {
                    a = 0; --i;
                    break;
                } else {
                    --i;
                }
            }

            if (a !== 0)
                astr[++i] = a;
        }

        astr.splice(i + 1);

        return astr;
    }

    public static main(): void {
        // add asteroids
        const astr: number[] = [2, 4, -4, -1];

        // asteroids remaining
        let ans: number[] = new src246a().asteroidCollision(astr);
        console.log(ans.join(" "));
    }
}

src246a.main();