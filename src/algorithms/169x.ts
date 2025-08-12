/* 169a. majority element */
// #: algorithms + array

class src169a {
    /* Boyer-Moore voting algorithm */
    majorityElement(arr: number[]): number {
        let [candidate, cnt] = [arr[0], 0];

        for (const a of arr) {
            if (cnt === 0)
                candidate = a;

            cnt += (candidate === a) ? 1 : -1;
        }

        return candidate;
    }

    public static main(): void {
        // add array
        const arr: number[] = [2, 2, 1, 1, 1, 2, 2];

        // point out the majority value
        let ans: number = new src169a().majorityElement(arr);
        console.log(ans);
    }
}

src169a.main();

// more sols at: https://neetcode.io/solutions/majority-element