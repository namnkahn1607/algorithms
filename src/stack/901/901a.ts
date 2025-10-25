/* 901. online stock span */
// @: stack
import { Stack } from "datastructures-js";

class StockSpanner {
    constructor(private stack = new Stack<number[]>()) {}

    next(price: number): number {
        const stack = this.stack;
        let span = 1;

        while (!stack.isEmpty() && price >= stack.peek()![0])
            span += this.stack.pop()![1];

        stack.push([price, span]);

        return span;
    }
}

export { StockSpanner };