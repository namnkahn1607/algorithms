/* 1137. n-th tribonacci number */
// #: dp

class src1137 {
    // 1. dp (top down)
    tribonacci(n: number): number {
        const cache = new Array<number>(n + 1).fill(-1);

        const calcTrib = function(i: number): number {
            if (i <= 1) return i;
            if (i === 2) return 1;

            if (cache[i] !== -1)
                return cache[i];

            cache[i] = calcTrib(i - 1) + calcTrib(i - 2) + calcTrib(i - 3);

            return cache[i];
        };

        return calcTrib(n);
    }

    // 2. dp (bottom up)
    tribonacci2(n: number): number {
        const dp = [0, 1, 1];

        if (n < 3) return dp[n];

        for (let i = 3; i <= n; ++i) {
            const [tmp1, tmp2] = [dp[1], dp[2]];
            dp[2] += (dp[0] + dp[1]);
            [dp[0], dp[1]] = [tmp1, tmp2];
        }

        return dp[2];
    }

    // 3. dp (space-optimized)
    tribonacci3(n: number): number {
        const dp = [0, 1, 1];

        if (n < 3) return dp[n];

        for (let i = 3; i <= n; ++i)
            dp[i % 3] = dp[0] + dp[1] + dp[2];

        return dp[n % 3];
    }

    public static main(): void {
        // add n
        const n: number = 12;

        // calculate n-th tribo
        const solution = new src1137();

        let [ans1, ans2, ans3] = [
            solution.tribonacci(n), solution.tribonacci2(n), solution.tribonacci3(n)
        ];

        console.log(ans1, ans2, ans3);
    }
}

src1137.main();