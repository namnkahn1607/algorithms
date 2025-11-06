/* 743b. network delay time */
// @: bellman ford

class B {
    networkDelayTime(times: number[][], n: number, k: number): number {
        const dist = Array<number>(n)
            .fill(Infinity);
        dist[k - 1] = 0;

        for (let i = 0; i < n - 1; ++i) {
            for (const [u, v, t] of times) {
                if (dist[u - 1] + t < dist[v - 1]) {
                    dist[v - 1] = dist[u - 1] + t;
                }
            }
        }

        const time = Math.max(...dist);

        return (time === Infinity) ? -1 : time;
    }
}

export { B };