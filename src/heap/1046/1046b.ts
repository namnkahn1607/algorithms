/* 1046b. last stone weight */
// @: min heap + simulation
import { MinPriorityQueue } from "datastructures-js";

class B {
    lastStoneWeight(stones: number[]): number {
        const queue = new MinPriorityQueue<number>();

        for (const weight of stones)
            queue.enqueue(-weight);

        while (queue.size() >= 2) {
            const a = queue.dequeue()!;
            const b = queue.dequeue()!;

            queue.enqueue(a - b);
        }

        if (queue.isEmpty())
            return 0;

        return -queue.front()!;
    }
}

export { B };