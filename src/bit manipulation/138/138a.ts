/* 138a. single number */
// @: bit manipulation

class A {
    singleNumber(nums: number[]): number {
        return nums.reduce((res, num) => res ^ num, 0);
    }
}

export { A };