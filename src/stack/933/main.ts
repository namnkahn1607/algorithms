/* 933. number of recent calls */

abstract class Counter {
    abstract ping(t: number): number;

    public static run(fig: Counter): void {
        const pings: number[] = [1, 100, 3001, 3002];
        const ans: number[] = [];

        for (const t of pings)
            ans.push(fig.ping(t));

        console.log(ans.join(" "));
    }
}

export { Counter as Counter };