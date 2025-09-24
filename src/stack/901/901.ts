/* 901. online stock span */
// #: stack
import { _StockSpanner } from "./main";
import { Stack } from "datastructures-js";

class StockSpanner extends _StockSpanner {
    constructor(
        private stack = new Stack<number[]>()
    ) { super() }

    next(price: number): number {
        const stack = this.stack;
        let span = 1;

        while (!stack.isEmpty() && price >= stack.peek()![0])
            span += this.stack.pop()![1];

        stack.push([price, span]);

        return span;
    }
}

StockSpanner.run(new StockSpanner());