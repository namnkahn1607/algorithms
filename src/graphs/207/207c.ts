/* 207c. course schedule */
// @: kahn's algorithm
import { Queue } from 'datastructures-js';

class C {
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adj = Array.from(
            { length: numCourses }, () => new Array<number>()
        );
        const indegree = new Array(numCourses).fill(0);

        for (const [dst, src] of prerequisites) {
            adj[src].push(dst);
            ++indegree[dst];
        }

        const queue = new Queue<number>();
        indegree.forEach((val, i) => {
            if (val === 0) queue.enqueue(i);
        });
        let finish = 0;

        while (!queue.isEmpty()) {
            const curr = queue.dequeue()!;
            ++finish;

            for (const nei of adj[curr]) {
                --indegree[nei];

                if (indegree[nei] === 0) {
                    queue.enqueue(nei);
                }
            }
        }

        return finish === numCourses;
    }
}

export { C };