/* 239a. sliding window maximum */
// @: monotonic queue
import { Deque } from 'datastructures-js';

class A {
    maxSlidingWindow(nums: number[], k: number): number[] {
        const ans: number[] = [];
        const dq = new Deque<number>();

        for (let i = 0; i < nums.length; ++i) {
            if (!dq.isEmpty() && dq.front()! <= i - k)
                dq.popFront();

            while (!dq.isEmpty() && nums[dq.back()!] < nums[i])
                dq.popBack();

            dq.pushBack(i);

            if (i >= k - 1) {
                ans.push(nums[dq.front()!]);
            }
        }

        return ans;
    }
}

export { A };