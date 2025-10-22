/* 215a. kth largest element in array */
// @: min heap
import { ArrayKth } from "./run";
import { MinPriorityQueue } from "datastructures-js";

class A extends ArrayKth {
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

A.run(new A());