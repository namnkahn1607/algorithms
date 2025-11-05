/* 246b. asteroid collision */
// @: stack
import { Stack } from "datastructures-js";

class B {
    asteroidCollision(astr: number[]): number[] {
        const stack = new Stack<number>();

        for (let a of astr) {
            while (!stack.isEmpty() && a < 0 && stack.peek()! > 0) {
                const diff = stack.peek()! + a;

                if (diff > 0) { a = 0; break; }
                if (diff === 0) { a = 0; stack.pop(); break; }
                stack.pop();
            }

            if (a !== 0) {
                stack.push(a);
            }
        }

        return stack.toArray();
    }
}

export { B };