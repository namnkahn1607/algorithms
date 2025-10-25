/* data structures: Heap */

import { MaxHeap } from "./max heap";
import { MinHeap } from "./min heap";

const runner = {
    kLargest: (nums: number[], k: number) => {
        const minPQ = new MinHeap();

        for (const num of nums) {
            minPQ.insert(num);

            if (minPQ.size() > k) {
                minPQ.remove();
            }
        }

        return minPQ.toArray();
    },
    kSmallest: (nums: number[], k: number) => {
        const maxPQ = new MaxHeap();

        for (const num of nums) {
            maxPQ.insert(num);

            if (maxPQ.size() > k) {
                maxPQ.remove();
            }
        }

        return maxPQ.toArray();
    },
};

const testCases = [
    {
        nums: [2, 4, 6, 8, 10, 12, 16, 20],
        k: 5,
        kLargest: [8, 10, 12, 16, 20],
        kSmallest: [10, 8, 6, 4, 2],
        description: 'a sample test',
    },
];

describe("Heap Data Structure", () => {
    testCases.forEach(({ nums, k, kLargest, kSmallest, description }) => {
        it(description, () => {
            const ans1 = runner.kLargest(nums, k);
            expect(ans1.sort()).toEqual(kLargest.sort());

            const ans2 = runner.kSmallest(nums, k);
            expect(ans2.sort()).toEqual(kSmallest.sort());
        });
    });
});