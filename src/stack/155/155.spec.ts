/* 155. min stack */

import { describe, expect, it } from "vitest";
import { MinStack } from "./155a";

const commandRunner = {
    push: (fig: MinStack, val: number) => {
        fig.push(val);
        return null;
    },
    pop: (fig: MinStack) => {
        fig.pop();
        return null;
    },
    top: (fig: MinStack) => {
        return fig.top();
    },
    getMin: (fig: MinStack) => {
        return fig.getMin();
    },
} as const;

const testCases = [
    {
        args: [1, 2, 0],
        cmds: ["push", "push", "push", "getMin", "pop", "top", "getMin"],
        output: [null, null, null, 0, null, 2, 1],
        description: 'a sample test',
    },
];

describe("Min Stack", () => {
    testCases.forEach(({ args, cmds, output, description }) => {
        it(description, () => {
            const stack = new MinStack();
            const ans: (number | null)[] = [];

            cmds.forEach((cmd, i) => {
                ans.push(commandRunner[cmd as keyof typeof commandRunner](stack, args[i]));
            });

            expect(ans).toEqual(output);
        });
    });
});