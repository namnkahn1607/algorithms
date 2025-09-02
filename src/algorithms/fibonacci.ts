/* algorithm: Fibonacci sequences */

class Fibonacci {
    // 1. recursion
    fibo(n: number): number {
        if (n <= 1) return n;

        return this.fibo(n - 1) + this.fibo(n - 2);
    }

    // 2. dp (top down)
    fibo2(n: number): number {
        const dp = new Array<number>(n + 1).fill(-1);

        const calcFib = function(i: number): number {
            if (i <= 1) return i;

            if (dp[i] === -1)
                dp[i] = calcFib(i - 1) + calcFib(i - 2);

            return dp[i];
        };

        return calcFib(n);
    }

    // 3. dp (bottom up)
    fibo3(n: number): number {
        const dp = [0, 1];

        if (n < 2) return dp[n];

        for (let i = 2; i <= n; ++i) {
            const tmp: number = dp[1];
            dp[1] += dp[0];
            dp[0] = tmp;
        }

        return dp[1];
    }

    // 4. dp (space-optimized)
    fibo4(n: number): number {
        const dp = [0, 1];

        if (n < 2) return dp[n];

        for (let i = 2; i <= n; ++i)
            dp[i % 2] = dp[0] + dp[1];

        return dp[n % 2];
    }

    public static main(): void {
        // add n
        const n: number = 22;

        // calculate n-th fibo
        const solution = new Fibonacci();

        let [ans1, ans2, ans3, ans4] = [
            solution.fibo(n), solution.fibo2(n),
            solution.fibo3(n), solution.fibo4(n)
        ];

        console.log(ans1, ans2, ans3, ans4);
    }
}

Fibonacci.main();