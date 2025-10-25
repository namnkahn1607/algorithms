/* 901. online stock span */

import { describe, expect, it } from "vitest";
import { StockSpanner } from "./901a";

const testCases = [
    {
        prices: [100, 80, 60, 70, 60, 75, 85],
        output: [1, 1, 1, 2, 1, 4, 6],
        description: 'a sample test',
    },
];

describe("Online Stock Span", () => {
    testCases.forEach(({ prices, output, description }) => {
        const figure = new StockSpanner();

        it(description, () => {
            prices.forEach((price, i) => {
                const span = figure.next(price);

                expect(span).toEqual(output[i]);
            });
        });
    });
});