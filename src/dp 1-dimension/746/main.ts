/* 746. min cost climbing stairs */

abstract class StairCost {
    abstract minCostClimbingStairs(cost: number[]): number;

    public static run(sol: StairCost): void {
        const cost: number[] = [1, 2, 1, 2, 1, 1, 1];
        console.log(sol.minCostClimbingStairs(cost));
    }
}

export { StairCost };