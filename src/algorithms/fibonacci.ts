/* algorithm: Fibonacci sequences */

class Fibonacci {
    // 1. dp + recursion
    fibo(n: number): number {
        if (n <= 1) return n;

        return this.fibo(n - 1) + this.fibo(n - 2);
    }

    // 2. dp + memoization + recursion
    fibo2(n: number): number {
        const memo = new Array<number>(n + 1).fill(-1);

        const calcFib = function(i: number): number {
            if (i <= 1) return i;

            if (memo[i] !== -1)
                return memo[i];

            memo[i] = calcFib(i - 1) + calcFib(i - 2);

            return memo[i];
        };

        return calcFib(n);
    }

    public static main(): void {
        // add n
        const n: number = 5;

        // calculate n-th fibo
        let ans1: number = new Fibonacci().fibo(n);
        let ans2: number = new Fibonacci().fibo2(n);

        console.log(ans1, ans2);
    }
}

Fibonacci.main();