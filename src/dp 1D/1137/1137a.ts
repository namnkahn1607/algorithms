/* 1137a. n-th tribonacci number */
// @: dp (top down)

class A {
    tribonacci(n: number): number {
        const cache = new Array(n + 1).fill(-1);

        const calcTrib = (i: number):number => {
            if (i <= 1) return i;
            if (i === 2) return 1;

            if (cache[i] !== -1)
                return cache[i];

            cache[i] = calcTrib(i - 1) + calcTrib(i - 2) + calcTrib(i - 3);

            return cache[i];
        };

        return calcTrib(n);
    }
}

export { A };