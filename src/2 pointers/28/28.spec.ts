/* 28. needle in haystack */

import { A } from "./28a";
import { B } from "./28b";

const approaches = [
    { solution: new A() }, { solution: new B() }
];

const testCases = [
    {
        haystack: "needcodeneetcode",
        needle: "neet",
        output: 8,
        description: 'a sample test'
    }
];

approaches.forEach(({ solution }) => {
    describe('Needle In HayStack', () => {
        testCases.forEach(({ haystack, needle, output, description }) => {
            it(description, () => {
                const ans = solution.strStr(haystack, needle);

                expect(ans).toEqual(output);
            });
        });
    });
});