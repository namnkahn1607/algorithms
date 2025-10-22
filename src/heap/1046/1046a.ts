/* 1046a. last stone weight */
// @: max heap
import { StoneWeights } from "./run";
import { MaxPriorityQueue } from "datastructures-js";

class A extends StoneWeights {
    lastStoneWeight(stones: number[]): number {
        const queue = new MaxPriorityQueue<number>();

        for (const weight of stones)
            queue.enqueue(weight);

        while (queue.size() >= 2) {
            const a = queue.dequeue()!;
            const b = queue.dequeue()!;

            queue.enqueue(a - b);
        }

        if (queue.isEmpty())
            return 0;

        return queue.front()!;
    }
}

A.run(new A());