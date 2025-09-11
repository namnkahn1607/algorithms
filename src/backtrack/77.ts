/* 77. combinations */
// #: backtracking

class src77 {
    // 1. backtracking I - O(n.2^n) time
    combine(n: number, k: number): number[][] {
        const ans: number[][] = [];

        const dfs = function(i: number, comb: number[]): void {
            if (comb.length === k) {
                ans.push([...comb]);
                return;
            }

            if (i > n) return;

            comb.push(i);
            dfs(i + 1, comb);

            comb.pop();
            dfs(i + 1, comb);
        };

        dfs(1, []);

        return ans;
    }

    // 2. backtracking II - O(n.nCk) time
    combine2(n: number, k: number): number[][] {
        const ans: number[][] = [];

        const dfs = function(start: number, comb: number[]): void {
            if (comb.length === k) {
                ans.push([...comb]);
                return;
            }

            if (start > n) return;

            for (let i = start; i <= n; ++i) {
                comb.push(i);
                dfs(i + 1, comb);
                comb.pop();
            }
        };

        dfs(1, []);

        return ans;
    }

    public static main(): void {
        // add n and k
        const [n, k]: [number, number] = [4, 2];

        // number of combination of size k from 1 to n
        let ans1: number[][] = new src77().combine(n, k);

        console.log(ans1.map(val => {
            return val.join(",");
        }).join(" "));

        let ans2: number[][] = new src77().combine2(n, k);

        console.log(ans2.map(val => {
            return val.join(",");
        }).join(" "));
    }
}

src77.main();