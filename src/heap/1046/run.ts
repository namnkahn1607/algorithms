/* 1046. last stone weight */

abstract class StoneWeights {
    abstract lastStoneWeight(stones: number[]): number;

    public static run(sol: StoneWeights): void {
        const stones: number[] = [2, 3, 6, 2, 4];
        console.log(sol.lastStoneWeight(stones));
    }
}

export { StoneWeights };