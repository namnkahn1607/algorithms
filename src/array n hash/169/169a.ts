/* 169a. majority element */
// @: Boyer-Moore

class A {
    majorityElement(arr: number[]): number {
        let [candidate, cnt] = [arr[0], 0];

        for (const a of arr) {
            if (cnt === 0)
                candidate = a;

            cnt += (candidate === a) ? 1 : -1;
        }

        return candidate;
    }
}

export { A };