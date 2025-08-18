/* 933. number of recent calls */
// #: queue

class RecentCounter {
    constructor(private queue: number[] = [], private i: number = 0) {}

    public ping(t: number): number {
        this.queue.push(t);

        while (this.i < this.queue.length && this.queue[this.i] + 3000 < t)
            ++this.i;

        return this.queue.length - this.i;
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