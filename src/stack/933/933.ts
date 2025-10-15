/* 933. number of recent calls */
// @: queue
import { Counter } from "./run";
import { Queue } from "datastructures-js";

class RecentCounter extends Counter {
    constructor(private queue = new Queue<number>()) {
        super();
    }

    ping(t: number): number {
        const q = this.queue;
        q.push(t);

        while (!q.isEmpty() && q.front()! + 3000 < t)
            q.pop();

        return q.size();
    }
}

RecentCounter.run(new RecentCounter());