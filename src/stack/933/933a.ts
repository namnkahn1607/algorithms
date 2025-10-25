/* 933. number of recent calls */
// @: queue
import { Queue } from "datastructures-js";

class RecentCounter {
    constructor(private queue = new Queue<number>()) {}

    ping(t: number): number {
        const q = this.queue;
        q.push(t);

        while (!q.isEmpty() && q.front()! + 3000 < t)
            q.pop();

        return q.size();
    }
}

export { RecentCounter };