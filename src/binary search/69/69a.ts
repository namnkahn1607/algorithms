/* 69a. sqrt(x) */
// @: binary search

class A {
    mySqrt(x: number): number {
        let [L, R] = [0, x];

        while (L < R) {
            const M = L + Math.trunc((R - L) / 2);

            if (M * M < x) {
                L = M + 1;
            } else {
                R = M;
            }
        }

        if (L * L === x)
            return L;

        return L - 1;
    }
}

export { A };