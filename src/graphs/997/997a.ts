/* 997. find the town judge */
// @: indegree & outdegree

class A {
    findJudge(n: number, trust: number[][]): number {
        const delta = new Array<number>(n + 1).fill(0);

        for (const [truster, trusted] of trust) {
            --delta[truster];
            ++delta[trusted];
        }

        for (let i = 1; i <= n; ++i) {
            if (delta[i] === n - 1)
                return i;
        }

        return -1;
    }
}

export { A };