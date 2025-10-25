/* 933. number of recent calls */

import { describe, expect, it } from "vitest";
import { RecentCounter } from "./933a";

const testCases = [
    {
        pings: [1, 100, 3001, 3002],
        output: [1, 2, 3, 3],
        description: 'a sample test',
    },
];

describe("Number of Recent Calls", () => {
    testCases.forEach(({ pings, output, description }) => {
        const figure = new RecentCounter();

        it(description, () => {
            pings.forEach((ping, i) => {
                const span = figure.ping(ping);

                expect(span).toEqual(output[i]);
            });
        });
    });
});