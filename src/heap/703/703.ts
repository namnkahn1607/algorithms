/* 703. k-th largest element in a stream */
// @: heap
import { StreamKth } from "./run";

class KthLargest extends StreamKth {
    constructor(k: number, nums: number[]) {
        super(k, nums);
    }

    add(val: number): number {
        const heap = this.queue;
        heap.enqueue(val);

        if (heap.size() > this.k)
            heap.dequeue();

        return heap.front()!;
    }
}

KthLargest.run(new KthLargest(3, [1, 2, 3, 3]));