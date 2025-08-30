/* 1137. n-th tribonacci number */
// #: dp + memoization

class src1137 {
    tribonacci(n: number): number {
        const memo = new Array<number>(n + 1).fill(-1);

        const calcTrib = function(i: number): number {
            if (i <= 1) return i;
            if (i === 2) return 1;

            if (memo[i] !== -1)
                return memo[i];

            memo[i] = calcTrib(i - 1) + calcTrib(i - 2) + calcTrib(i - 3);

            return memo[i];
        };

        return calcTrib(n);
    }

    public static main(): void {
        // add n
        const n: number = 12;

        // calculate n-th tribo
        let ans: number = new src1137().tribonacci(n);
        console.log(ans);
    }
}

src1137.main();

// more sols at: https://neetcode.io/solutions/n-th-tribonacci-number