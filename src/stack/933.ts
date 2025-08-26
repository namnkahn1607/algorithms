/* 933. number of recent calls */
// #: queue
import { Queue } from "datastructures-js";

class RecentCounter {
    constructor(private queue: Queue<number> = new Queue()) {}

    ping(t: number): number {
        const refQueue = this.queue;

        refQueue.push(t);

        while (!refQueue.isEmpty() && refQueue.front() + 3000 < t)
            refQueue.pop();

        return refQueue.size();
    }

    public static main(): void {
        // initialize RecentCounter & add pings
        const counter: RecentCounter = new RecentCounter();
        const pings: number[] = [1, 100, 3001, 3002];

        // calculate recent calls for each request
        const ans: number[] = [];

        for (const t of pings)
            ans.push(counter.ping(t));

        console.log(ans.join(" "));
    }
}

RecentCounter.main();