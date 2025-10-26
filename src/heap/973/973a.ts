/* 973a. k closest points to origin */
// @: min heap
import { MinPriorityQueue } from "datastructures-js";

class A {
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

export { A };