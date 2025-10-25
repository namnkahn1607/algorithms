/* 229b. majority elements II */
// @: Boyer-Moore + hash

class B {
    majorityElement(nums: number[]): number[] {
        let cans = new Map<number, number>();

        for (const num of nums) {
            cans.set(num, (cans.get(num) ?? 0) + 1);

            if (cans.size <= 2)
                continue;

            let newCans = new Map<number, number>();

            for (const [can, cnt] of cans.entries()) {
                if (cnt > 1)
                    newCans.set(can, cnt - 1);
            }

            cans = newCans;
        }

        const ans: number[] = [];

        const count = (key: number): number => {
            return nums.reduce(
                (count, num) => num === key ? ++count : count, 0
            );
        }

        for (const can of cans.keys()) {
            if (count(can) > Math.floor(nums.length / 3))
                ans.push(can);
        }

        return ans;
    }
}

export { B };