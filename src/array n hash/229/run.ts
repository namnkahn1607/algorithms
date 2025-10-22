/* 229. majority elements II */

abstract class MajorityII {
    abstract majorityElement(nums: number[]): number[];

    public static run(sol: MajorityII): void {
        const arr: number[][] = [
            [1, 2, 3, 3, 3, 3, 3],
            [2, 1, 2],
            [1, 1, 2, 2]
        ];

        for (const nums of arr)
            console.log(sol.majorityElement(nums));
    }
}

export { MajorityII };