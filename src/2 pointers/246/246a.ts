/* 246a. asteroid collision */
// #: 2 pointers + dp
import { AsteroidCollision } from "./main";

class A extends AsteroidCollision {
    asteroidCollision(astr: number[]): number[] {
        let i = -1;

        for (let a of astr) {
            while (i >= 0 && a < 0 && astr[i] > 0) {
                const diff = astr[i] + a;

                if (diff < 0) {
                    --i;
                } else {
                    if (diff === 0)
                        --i;

                    a = 0;
                    break;
                }
            }

            if (a !== 0)
                astr[++i] = a;
        }

        astr.splice(i + 1);

        return astr;
    }
}

A.run(new A());