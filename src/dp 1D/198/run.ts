/* 198. house robber */

abstract class Robber {
    abstract rob(nums: number[]): number;

    public static run(sol: Robber): void {
        const nums: number[] = [2, 9, 8, 3, 6];
        console.log(sol.rob(nums));
    }
}

export { Robber };