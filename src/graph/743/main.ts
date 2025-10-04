/* 743. network delay time */

abstract class NetworkNode {
    abstract networkDelayTime(times: number[][], n: number, k: number): number;

    public static run(sol: NetworkNode): void {
        const times: number[][] = [
            [1, 2, 1], [2, 3, 1], [1, 4, 4], [3, 4, 1]
        ];
        const n: number = 4;
        const k: number = 1;

        console.log(sol.networkDelayTime(times, n, k));
    }
}

export { NetworkNode };