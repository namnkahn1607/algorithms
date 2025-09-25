/* 246b. asteroid collision */
// @: stack
import { AsteroidCollision } from "./main";
import { Stack } from "datastructures-js";

class B extends AsteroidCollision {
    asteroidCollision(astr: number[]): number[] {
        const stack = new Stack<number>();

        for (let a of astr) {
            while (!stack.isEmpty() && a < 0 && stack.peek()! > 0) {
                const sum = stack.peek()! + a;

                if (sum < 0) {
                    stack.pop();
                } else {
                    if (sum === 0) stack.pop();

                    a = 0;
                    break;
                }
            }

            if (a !== 0)
                stack.push(a);
        }

        return stack.toArray();
    }
}

B.run(new B());