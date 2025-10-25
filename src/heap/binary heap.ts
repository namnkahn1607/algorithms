/* data structures: Binary Heap */

abstract class BinaryHeap {
    array: number[] = [0];

    protected constructor(nums: number[] = []) {
        for (const num of nums) {
            this.array.push(num);
        }

        for (let i = Math.floor(this.size() / 2); i >= 1; --i) {
            this.sink(i);
        }
    }

    protected abstract swim(i: number): void;

    protected abstract sink(i: number): void;

    insert(val: number): void {
        this.array.push(val);
        this.swim(this.size());
    }

    remove(): number | undefined {
        if (this.isEmpty())
            return undefined;

        const ans = this.array[1];

        if (this.size() === 1) {
            this.array.pop();
            return ans;
        }

        this.array[1] = this.array.pop()!;
        this.sink(1);

        return ans;
    }

    toArray(): number[] {
        return this.array.slice(1);
    }

    size(): number {
        return this.array.length - 1;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }
}

export { BinaryHeap };