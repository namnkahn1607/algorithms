/* 1462a. course schedule IV */
// @: dfs + hash

class A {
    checkIfPrerequisite(
        numCourses: number, prerequisites: number[][],
        queries: number[][]
    ): boolean[] {
        const adj = Array.from(
            { length: numCourses }, () => new Array<number>()
        );

        for (const [prereq, crs] of prerequisites) {
            adj[crs].push(prereq);
        }

        const prereqMap = new Map<number, Set<number>>();

        const dfs = (crs: number): Set<number> => {
            if (!prereqMap.has(crs)) {
                prereqMap.set(crs, new Set<number>([crs]));

                for (const prereq of adj[crs]) {
                    for (const p of dfs(prereq)) {
                        prereqMap.get(crs)!.add(p);
                    }
                }
            }

            return prereqMap.get(crs)!;
        };

        for (let i = 0; i < numCourses; ++i) {
            dfs(i);
        }

        const ans: boolean[] = [];

        for (const [u, v] of queries) {
            ans.push(prereqMap.get(v)!.has(u))
        }

        return ans;
    }
}

export { A };