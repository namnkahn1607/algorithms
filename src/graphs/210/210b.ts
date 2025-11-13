/* 210b. course schedule II */
// @: kahn's algorithm
import { Queue } from 'datastructures-js';

class B {
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const adj = Array.from(
            { length: numCourses }, () => new Array<number>()
        );
        const indegree = new Array(numCourses).fill(0);

        for (const [dst, src] of prerequisites) {
            adj[src].push(dst);
            ++indegree[dst];
        }

        const ans: number[] = [];
        
        const queue = new Queue<number>();
        indegree.forEach((val, i) => {
            if (val === 0) queue.enqueue(i);
        });

        while (!queue.isEmpty()) {
            const curr = queue.dequeue()!;
            ans.push(curr);

            for (const nei of adj[curr]) {
                --indegree[nei];

                if (indegree[nei] === 0) {
                    queue.enqueue(nei);
                }
            }
        }

        if (ans.length === numCourses)
            return ans;

        return [];
    }
}

export { B };