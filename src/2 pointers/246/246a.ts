/* 246a. asteroid collision */
// @: 2 pointers + dp

class A {
    asteroidCollision(astr: number[]): number[] {
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

        astr.splice(i + 1);

        return astr;
    }
}

export { A };