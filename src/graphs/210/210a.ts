/* 210a. course schedule II */
// @: topological sort

class A {
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const adj = Array.from(
            { length: numCourses }, () => new Array<number>()
        );

        for (const [dst, src] of prerequisites) {
            adj[src].push(dst);
        }

        const ans: number[] = [];

        const onPath = new Array(numCourses).fill(false);
        const visited = new Array(numCourses).fill(false);

        const dfs = (curr: number): boolean => {
            onPath[curr] = true;
            visited[curr] = true;

            for (const nei of adj[curr]) {
                if (onPath[nei]) return false;
                if (visited[nei]) continue;

                if (!dfs(nei)) {
                    return false;
                }
            }

            ans.push(curr);
            onPath[curr] = false;

            return true;
        };

        for (let i = 0; i < numCourses; ++i) {
            if (!visited[i] && !dfs(i)) {
                return [];
            }
        }

        return ans.reverse();
    }
}

export { A };