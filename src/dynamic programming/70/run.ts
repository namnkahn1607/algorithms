/* 70. climbing stairs */
// similar quests: 1147

abstract class StairsClimb {
    abstract climbStairs(n: number): number;

    public static run(sol: StairsClimb): void {
        const n: number = 5;
        console.log(sol.climbStairs(n));
    }
}

export { StairsClimb };