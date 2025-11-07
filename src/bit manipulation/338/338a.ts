/* 338a. counting bits */
// @: dp

class A {
    countBits(n: number): number[] {
        const dp = new Array<number>(n + 1).fill(0);
        let offset = 1;

        for (let i = 1; i < n + 1; ++i) {
            if (offset * 2 === i)
                offset = i;

            dp[i] = 1 + dp[i - offset];
        }

        return dp;
    }
}

export { A };