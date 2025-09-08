/* 77. combinations */
// #: backtracking

class src77 {
    combine(n: number, k: number): number[][] {
        const ans: number[][] = [];

        const dfs = function(i: number, comb: number[]): void {
            if (comb.length === k) {
                ans.push([...comb]);
                return;
            }

            if (i > n)
                return;

            comb.push(i);
            dfs(i + 1, comb);

            comb.pop();
            dfs(i + 1, comb);
        };

        dfs(1, []);

        return ans;
    }

    public static main(): void {
        // add n and k
        const [n, k]: [number, number] = [4, 2];

        // number of combination of size k from 1 to n
        let ans: number[][] = new src77().combine(n, k);

        console.log(ans.map(val => {
            return val.join(",")
        }).join(" "));
    }
}

src77.main();

// more sols at: https://neetcode.io/solutions/combinations