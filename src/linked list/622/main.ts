/* 622. design circular queue */

abstract class CQueue {
    abstract enQueue(val: number): boolean;

    abstract deQueue(): boolean;

    abstract Front(): number;

    abstract Rear(): number;

    abstract isFull(): boolean;

    abstract isEmpty(): boolean;

    public static run(fig: CQueue): void {
        const args: number[][] = [
            [1], [2], [3], [4], [], [], [], [4], []
        ];

        const cmds: string[] = [
            "enQueue", "enQueue", "enQueue", "enQueue", "Rear",
            "isFull", "deQueue", "enQueue", "Rear"
        ];

        const ans: string[] = [];

        for (let i = 0; i < args.length; ++i) {
            switch (cmds[i]) {
                case "enQueue":
                    ans.push(String(fig.enQueue(args[i][0])))
                    break;

                case "deQueue":
                    ans.push(String(fig.deQueue()));
                    break;

                case "Front":
                    ans.push(String(fig.Front()));
                    break;

                case "Rear":
                    ans.push(String(fig.Rear()));
                    break;

                case "isFull":
                    ans.push(String(fig.isFull()));
                    break;

                case "isEmpty":
                    ans.push(String(fig.isEmpty()));
                    break;

                default:
                    throw new Error("No such operation found");
            }
        }

        console.log(ans.join(" "));
    }
}

export { CQueue };