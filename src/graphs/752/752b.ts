/* 752b. open the lock */
// @: bfs
import { Queue } from "datastructures-js";

class B {
    openLock(deadends: string[], target: string): number {
        const visited = new Set<string>(deadends);

        if (visited.has('0000')) return -1;

        const children = (curr: string): string[] => {
            const list = [];

            for (let i = 0; i < 4; ++i) {
                for (const delta of [-1, 1]) {
                    const digit = (+curr[i] + delta + 10) % 10;
                    const child = curr.slice(0, i) + digit + curr.slice(i + 1);

                    list.push(child);
                }
            }

            return list;
        }

        const queue = new Queue<[string, number]>();
        queue.enqueue(['0000', 0]);

        while (!queue.isEmpty()) {
            const [curr, turn] = queue.dequeue()!;

            if (curr === target) return turn;

            for (const child of children(curr)) {
                if (!visited.has(child)) {
                    visited.add(child);
                    queue.enqueue([child, turn + 1]);
                }
            }
        }

        return -1;
    }
}

export { B };