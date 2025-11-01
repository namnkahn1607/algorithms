/* data structures: Max Heap */

import { BinaryHeap } from "./binary heap";

class MaxHeap extends BinaryHeap {
    constructor(nums: number[] = []) {
        super(nums);
    }

    max(): number | undefined {
        if (this.isEmpty())
            return undefined;

        return this.array[1];
    }

    protected swim(i: number): void {
        const heap = this.array;

        while (i > 1) {
            const parent = Math.floor(i / 2);

            if (heap[i] > heap[parent]) {
                [heap[i], heap[parent]] = [heap[parent], heap[i]];
                i = parent;
            } else {
                break;
            }
        }
    }

    protected sink(i: number): void {
        const heap = this.array;
        const m = this.size() + 1;

        while (2 * i < m) {
            const [L, R] = [2 * i, 2 * i + 1];
            let max = L;

            if (R < m && heap[R] > heap[L])
                max = R;

            if (heap[i] < heap[max]) {
                [heap[i], heap[max]] = [heap[max], heap[i]];
                i = max;
            } else {
                break;
            }
        }
    }
}

export { MaxHeap };