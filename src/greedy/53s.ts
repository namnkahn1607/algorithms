/* 53. maximum subarray */
// #: dp + Kadane
import { Kadane } from "../algorithms/Kadane";

class src53 {
    maxSubarray(arr: number[]): number {
        return Kadane.maxSubarraySum(arr);
    }

    public static main(): void {
        // add array
        const arr: number[] = [
            4, -1, 2, -7, 3, 4
        ];

        // find the largest subarray sum
        let ans: number = new src53().maxSubarray(arr);
        console.log(ans);
    }
}

src53.main();

// more sols at: https://neetcode.io/solutions/maximum-subarray