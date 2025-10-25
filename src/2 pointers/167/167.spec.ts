/* 167. 2 integer sum II */

import { A } from "./167a";

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        arr: [1, 2, 3, 4],
        target: 4,
        output: [1, 3],
        description: 'a sample test'
    }
];

approaches.forEach(({ solution }) => {
    describe('2 Integer Sum II', () => {
        testCases.forEach(({ arr, target, output, description }) => {
            it(description, () => {
                const ans = solution.twoSum(arr, target);

                expect(ans).toEqual(output);
            });
        });
    });
});