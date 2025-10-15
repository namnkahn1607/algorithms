/* 155. minimum stack */

import { Stack } from "datastructures-js";

abstract class _MinStack {
    protected constructor(
        protected readonly stack = new Stack<number>(),
        protected min: number = Number.MAX_VALUE
    ) {}

    abstract push(val: number): void;

    abstract pop(): void;

    abstract top(): number;

    abstract getMin(): number;

    public static run(fig: _MinStack): void {
        const args: number[] = [1, 2, 0];
        const cmds: string[] = [
            "push", "push", "push", "getMin",
            "pop", "top", "getMin"
        ];

        const ans: string[] = [];

        for (let i = 0; i < args.length; ++i) {
            switch (cmds[i]) {
                case "push":
                    fig.push(args[i]);
                    ans.push("null");
                    break;

                case "pop":
                    fig.pop();
                    ans.push("null");
                    break;

                case "top":
                    ans.push(String(fig.top()));
                    break;

                case "getMin":
                    ans.push(String(fig.getMin()));
                    break;
            }
        }

        console.log(ans.join(" "));
    }
}

export { _MinStack };