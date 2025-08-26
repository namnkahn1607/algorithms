/* 155. minimum stack */
// #: stack

class MinStack {
    constructor(private readonly stack: number[] = [], private min: number = Number.MAX_VALUE) {}

    push(val: number): void {
        if (this.stack.length === 0)
            this.stack.push(0);
        else
            this.stack.push(val - this.min);

        this.min = Math.min(this.min, val);
    }

    pop(): void {
        const top = this.stack[this.stack.length - 1];

        if (top < 0)
            this.min -= top;

        this.stack.pop();

        if (this.stack.length === 0)
            this.min = Number.MAX_VALUE;
    }

    top(): number {
        const top = this.stack[this.stack.length - 1];

        return (top < 0) ? this.min : this.min + top;
    }

    getMin(): number {
        return this.min;
    }

    public static main(): void {
        // add operations & create MinStack
        let fig: MinStack | null = null;
        const args: (string | number)[] = [
            "MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"
        ];

        // apply operations on MinStack
        const m: number = args.length;
        const ans: string[] = [];

        for (let i = 0; i < m; ++i) {
            switch (args[i]) {
                case "MinStack":
                    fig = new MinStack();
                    ans.push("null");
                    break;

                case "push":
                    if (typeof args[i] === "string")
                        throw new Error("malformed operations");

                    fig!.push(<number>args[i]);
                    ans.push("null");
                    break;

                case "pop":
                    fig!.pop();
                    ans.push("null");
                    break;

                case "top":
                    ans.push(String(fig!.top()));
                    break;

                case "getMin":
                    ans.push(String(fig!.getMin()));
                    break;
            }
        }

        console.log(ans.join(" "));
    }
}

MinStack.main();