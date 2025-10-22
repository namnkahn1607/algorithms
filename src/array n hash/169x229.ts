/* 169x229: majority elements with k */
// @: Boyer-Moore + hash

class Majorities {
    majorityElements(k: number, nums: number[]): number[] {
        if (k === 1) return [];

        const select = (): Map<number, number> => {
            let cans = new Map<number, number>();

            for (const num of nums) {
                cans.set(num, (cans.get(num) ?? 0) + 1);

                if (cans.size <= k - 1)
                    continue;

                let newCans = new Map<number, number>();

                for (const can of cans.keys()) {
                    if (cans.get(can)! > 1)
                        newCans.set(can, (newCans.get(can) ?? 0) + 1);
                }

                cans = newCans;
            }

            return cans;
        };

        let cans = select();
        let freq = new Map<number, number>();

        for (const num of nums) {
            if (cans.has(num))
                freq.set(num, (freq.get(num) ?? 0) + 1);
        }

        const ans: number[] = [];

        for (const can of freq.keys()) {
            if (freq.get(can)! > Math.floor(nums.length / 3))
                ans.push(can);
        }

        return ans;
    }

    public static run(): void {
        const arr: number[] = [1, 2, 3, 3, 3, 3, 3];
        const k: number = 3;

        console.log(new Majorities().majorityElements(k, arr));
    }
}

Majorities.run();