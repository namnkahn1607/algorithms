/* 703a. k-th largest element in a stream */
// @: min heap
import { MinPriorityQueue } from "datastructures-js";

class KthLargest {
    private readonly k: number;
    private readonly queue = new MinPriorityQueue<number>();

    constructor(k: number, nums: number[]) {
        const heap = this.queue;
        this.k = k;

        for (const num of nums)
            heap.enqueue(num);

        while (heap.size() > k) {
            heap.dequeue();
        }
    }

    add(val: number): number {
        const heap = this.queue;
        heap.enqueue(val);

        if (heap.size() > this.k)
            heap.dequeue();

        return heap.front()!;
    }
}

export { KthLargest };