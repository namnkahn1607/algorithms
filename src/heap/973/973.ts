/* 973. k closest points to origin */
// @: min heap
import { ClosestPoints } from "./run";
import { MinPriorityQueue } from "datastructures-js";

class A extends ClosestPoints {
    kClosest(points: number[][], k: number): number[][] {
        const ans: number[][] = [];
        const heap = new MinPriorityQueue<number[]>((
            point => point[0]
        ));

        for (const [x, y] of points) {
            const dist = x ** 2 + y ** 2;
            heap.enqueue([dist, x, y]);
        }

        for (let i = 0; i < k; ++i) {
            const [_, x, y] = heap.dequeue()!;
            ans.push([x, y]);
        }

        return ans;
    }
}

A.run(new A());