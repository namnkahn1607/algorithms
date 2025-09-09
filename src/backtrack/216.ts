/* 216. combination sum 3 */
// #: backtracking

class src216 {
    combinationSum3(k: number, n: number): number[][] {
        const ans: number[][] = [];

        const dfs = function(start: number, comb: number[], remain: number): void {
            if (comb.length === k) {
                if (remain === 0)
                    ans.push([...comb]);

                return;
            }

            for (let i = start; i <= 9; ++i) {
                if (remain - i < 0) break;

                comb.push(i);
                dfs(i + 1, comb, remain - i);
                comb.pop();
            }
        };

        dfs(1, [], n);

        return ans;
    }

    public static main(): void {
        // add k and n
        const [k, n]: [number, number] = [3, 9];

        // valid combinations of size k from 1 to n
        let ans: number[][] = new src216().combinationSum3(k, n);

        console.log(ans.map(val => {
            return val.join(",");
        }).join(" "));
    }
}

src216.main();