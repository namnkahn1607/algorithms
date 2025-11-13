/* 1462b. course schedule IV */
// @: kahn
import { Queue } from 'datastructures-js';

class B {
    checkIfPrerequisite(
        numCourses: number, prerequisites: number[][],
        queries: number[][]
    ): boolean[] {
        const adj = Array.from(
            { length: numCourses }, () => new Set<number>()
        );
        const preqOf = Array.from(
            { length: numCourses }, () => new Set<number>()
        );
        const indegree = new Array(numCourses).fill(0);

        for (const [preq, crs] of prerequisites) {
            adj[preq].add(crs);
            ++indegree[crs];
        }

        const queue = new Queue<number>();

        for (let i = 0; i < numCourses; ++i) {
            if (indegree[i] === 0) queue.enqueue(i);
        }

        while (!queue.isEmpty()) {
            const preq = queue.dequeue()!;

            for (const crs of adj[preq]) {
                preqOf[crs].add(preq);

                for (const nei of preqOf[preq]) {
                    preqOf[crs].add(nei);
                }

                --indegree[crs];

                if (indegree[crs] === 0) {
                    queue.enqueue(crs);
                }
            }
        }

        const ans: boolean[] = [];

        for (const [u, v] of queries) {
            ans.push(preqOf[v].has(u));
        }

        return ans;
    }
}

export { B };