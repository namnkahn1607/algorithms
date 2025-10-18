/* 703. k-th largest element in a stream */

import { MinPriorityQueue } from "datastructures-js";

abstract class StreamKth {
    protected readonly queue: MinPriorityQueue<number>;
    protected readonly k: number;

    protected constructor(k: number, nums: number[]) {
        const heap = this.queue = new MinPriorityQueue();
        this.k = k;

        for (const num of nums)
            heap.enqueue(num);

        while (heap.size() > k) {
            heap.dequeue();
        }
    }

    abstract add(val: number): number;

    public static run(sol: StreamKth) {
        const args: number[] = [3, 5, 6, 7, 8];
        const ans: number[] = [];

        for (const val of args) {
            ans.push(sol.add(val));
        }

        console.log(ans.join(" "));
    }
}

export { StreamKth };