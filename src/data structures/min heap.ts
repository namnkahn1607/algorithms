/* data structures: Min Heap */

import { BinaryHeap } from "./binary heap";

class MinHeap extends BinaryHeap {
    constructor(nums: number[] = []) {
        super(nums);
    }

    swim(i: number): void {
        const heap = this.array;

        while (i > 1) {
            const parent = Math.floor(i / 2);

            if (heap[i] < heap[parent]) {
                [heap[i], heap[parent]] = [heap[parent], heap[i]];
                i = parent;
            } else {
                break;
            }
        }
    }

    sink(i: number): void {
        const heap = this.array;
        const m = this.size() + 1;

        while (2 * i < m) {
            const [L, R] = [2 * i, 2 * i + 1];
            let min = L;

            if (R < m && heap[R] < heap[L])
                min = R;

            if (heap[i] > heap[min]) {
                [heap[i], heap[min]] = [heap[min], heap[i]];
                i = min;
            } else {
                break;
            }
        }
    }
}

export { MinHeap };