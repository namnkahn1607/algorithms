/* 721a. accounts merge */
// @: disjoint set

class A {
    accountsMerge(accounts: string[][]): string[][] {
        const size = accounts.length;

        const par = Array.from(
            { length: size }, (_, i) => i
        );
        const rank = new Array<number>(size).fill(1);

        const find = (i: number): number => {
            if (par[i] !== i)
                par[i] = find(par[i]);

            return par[i];
        };

        const union = (x: number, y: number): boolean => {
            const [rx, ry] = [find(x), find(y)];

            if (rx === ry) return false;

            if (rank[rx] < rank[ry]) {
                par[rx] = ry;
            } else if (rank[ry] > rank[rx]) {
                par[ry] = rx;
            } else {
                par[rx] = ry;
                rank[ry] += 1;
            }

            return true;
        };

        const emailToAcc = new Map<string, number>();

        for (let i = 0; i < size; ++i) {
            for (const email of accounts[i].slice(1)) {
                if (emailToAcc.has(email)) {
                    union(i, emailToAcc.get(email)!);
                } else {
                    emailToAcc.set(email, i);
                }
            }
        }

        const emailGroup = new Map<number, Array<string>>();

        for (const [email, accIndex] of emailToAcc.entries()) {
            const leader = find(accIndex);

            if (emailGroup.has(leader)) {
                emailGroup.get(leader)!.push(email);
            } else {
                emailGroup.set(leader, [email]);
            }
        }

        const ans: string[][] = [];

        for (const [accIndex, emails] of emailGroup.entries()) {
            const name = accounts[accIndex][0];
            ans.push([name, ...(emails.sort())]);
        }

        return ans;
    }
}

export { A };