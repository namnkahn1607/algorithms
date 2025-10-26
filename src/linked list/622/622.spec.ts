/* 622. design circular queue */

import { describe, expect, it } from "vitest";
import { CircularQueue } from "./622a";

const commandRunner = {
    enQueue: (fig: CircularQueue, val: number | null) => {
        if (val === null) return false;
        return fig.enQueue(val);
    },
    deQueue: (fig: CircularQueue) => {
        return fig.deQueue();
    },
    Front: (fig: CircularQueue) => {
        return fig.Front();
    },
    Rear: (fig: CircularQueue) => {
        return fig.Rear();
    },
    isFull: (fig: CircularQueue) => {
        return fig.isFull();
    },
    isEmpty: (fig: CircularQueue) => {
        return fig.isEmpty();
    },
} as const;

const testCases = [
    {
        k: 3,
        args: [1, 2, 3, 4, null, null, null, 4, null],
        cmds: ["enQueue", "enQueue", "enQueue", "enQueue", "Rear",
             "isFull", "deQueue", "enQueue", "Rear"],
        output: [true, true, true, false, 3, true, true, true, 4],
        description: 'a sample test',
    },
];

describe("Design Circular Queue", () => {
    testCases.forEach(({ k, args, cmds, output, description }) => {
        it(description, () => {
            const queue = new CircularQueue(k);
            const ans: (boolean | number)[] = [];

            cmds.forEach((cmd, i) => {
                 ans.push(commandRunner[cmd as keyof typeof commandRunner](queue, args[i]));
            });

            expect(ans).toEqual(output);
        });
    });
});