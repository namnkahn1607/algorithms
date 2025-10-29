/* 374a. guess number higher or lower */
// @: binary search

abstract class GuessGame {
    private picked: number = 0;

    protected guess(num: number) {
        if (num > this.picked) return -1;
        if (num < this.picked) return 1;
        return 0;
    }

    abstract guessNum(n: number): number;

    setPicked(num: number): void {
        this.picked = num;
    }
}

class A extends GuessGame {
    guessNum(n: number): number {
        let [L, R] = [0, n];

        while (L <= R) {
            const M = L + Math.trunc((R - L) / 2);

            switch (this.guess(M)) {
                case -1: R = M - 1; break;
                case 1: L = M + 1; break;
                case 0: return M;
            }
        }

        return -1;
    }
}

export { A };