/* 169b. majority element */
// @: randomization
import _ from 'lodash';

class B {
    majorityElement(arr: number[]): number {
        const m = arr.length;

        while (true) {
            const candidate = _.sample(arr)!;
            let cnt = 0;

            for (const num of arr) {
                if (num === candidate)
                    ++cnt;
            }

            if (cnt > Math.trunc(m / 2))
                return candidate;
        }
    }
}

export { B };