/* 997. find the town judge */

abstract class TownJudge {
    abstract findJudge(n: number, trust: number[][]): number;

    public static run(sol: TownJudge): void {
        const n: number = 4;
        const trust: number[][] = [
            [1, 3], [4, 3], [2, 3]
        ];

        console.log(sol.findJudge(n, trust));
    }
}

export { TownJudge };