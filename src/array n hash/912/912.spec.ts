/* 912. sort an array */

import { describe, expect, it } from "vitest";
import { Mergesort } from "./912a";
import { Quicksort } from "./912b";
import { QuicksortII } from "./912c";
import { Heapsort } from "./912d";

const approaches = [
    { solution: new Mergesort() }, { solution: new Quicksort() },
    { solution: new QuicksortII() }, { solution: new Heapsort() },
];

const testCases = [
    {
        arr: [18, 19, 33, 20, 19, 12, 8, 24, 14, 14],
        output: [8, 12, 14, 14, 18, 19, 19, 20, 24, 33],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe("Sort an Array", () => {
        testCases.forEach(({ arr, output, description }) => {
            it(description, () => {
                const sample = arr.slice();
                solution.sort(sample, 0, sample.length - 1);

                expect(sample).toEqual(output);
            });
        });
    });
});