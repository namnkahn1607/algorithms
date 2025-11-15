/* 332a. reconstruct flight path */
// @: hierholzer

class A {
    findItinerary(tickets: string[][]): string[] {
        const adj = new Map<string, Array<string>>();

        for (const [src, dst] of tickets) {
            if (!adj.has(src))
                adj.set(src, []);

            adj.get(src)!.push(dst);
        }

        for (const neighbors of adj.values()) {
            neighbors.sort().reverse();
        }

        const path: Array<string> = [];

        const dfs = (curr: string): void => {
            while ((adj.get(curr) ?? []).length !== 0) {
                const nei = adj.get(curr)!.pop()!;
                dfs(nei);
            }

            path.push(curr);
        };

        dfs('JFK');

        return path.reverse();
    }
}

export { A };