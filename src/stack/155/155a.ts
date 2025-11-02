/* 155a. minimum stack */
// @: stack
import { Stack } from "datastructures-js";

class MinStack {
    constructor(
        protected readonly stack = new Stack<number>(),
        protected min: number = Number.MAX_VALUE
    ) {}

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

export { MinStack };