/* 246a. asteroid collision */
// @: 2 pointers + dp

class A {
    asteroidCollision(astr: Array<number>): Array<number> {
        let i = -1;

        for (let a of astr) {
            while (i >= 0 && a < 0 && astr[i] > 0) {
                const diff = astr[i] + a;

                if (diff > 0) { a = 0; break; }
                if (diff === 0)  { a = 0; --i; break; }
                --i;
            }

            if (a !== 0) {
                astr[++i] = a;
            }
        }

        return astr.slice(0, i + 1);
    }
}

export { A };