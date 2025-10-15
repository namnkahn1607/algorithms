/* 155. minimum stack */
// @: stack
import { _MinStack } from "./run";

class MinStack extends _MinStack {
    constructor() {
        super();
    }

    push(val: number): void {
        const stack = this.stack;

        if (stack.isEmpty()) {
            stack.push(0);
        } else {
            stack.push(val - this.min);
        }

        this.min = Math.min(this.min, val);
    }

    pop(): void {
        const stack = this.stack;
        const top = stack.peek()!;

        if (top < 0)
            this.min -= top;

        stack.pop();

        if (stack.isEmpty())
            this.min = Number.MAX_VALUE;
    }

    top(): number {
        const top = this.stack.peek()!;

        return (top < 0) ? this.min : this.min + top;
    }

    getMin(): number {
        return this.min;
    }
}

MinStack.run(new MinStack());