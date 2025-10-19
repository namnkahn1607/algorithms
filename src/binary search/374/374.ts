/* 374. guess number higher or lower */
// @: binary search
import { GuessGame } from "./run";

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

A.run(new A());