/* 189. rotate array */

import { A } from "./189a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        arr: [1, 2, 3, 4, 5, 6, 7, 8],
        k: 3,
        output: [6, 7, 8, 1, 2, 3, 4, 5],
        description: 'a sample test',
    }
];

approaches.forEach(({ solution }) => {
    describe('Rotate Array', () => {
        testCases.forEach(({ arr, k, output, description }) => {
            it(description, () => {
                solution.rotate(arr, k);

                expect(arr).toEqual(output);
            });
        });
    });
});