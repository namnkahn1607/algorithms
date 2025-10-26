/* 215a. k-th largest element in array */
// @: min heap
import { MinPriorityQueue } from "datastructures-js";

class A {
    findKthLargest(nums: number[], k: number): number {
        const queue = new MinPriorityQueue<number>();

        for (const num of nums) {
            queue.enqueue(num);

            if (queue.size() > k)
                queue.pop();
        }

        return queue.front()!;
    }
}

export { A };