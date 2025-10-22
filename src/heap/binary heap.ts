/* data structures: Binary Heap */

abstract class BinaryHeap {
    array: number[] = [0];

    protected constructor(nums: number[] = []) {
        for (const num of nums) {
            this.insert(num);
        }
    }

    abstract swim(i: number): void;

    abstract sink(i: number): void;

    insert(val: number): void {
        this.array.push(val);
        this.swim(this.size());
    }

    remove(): number | undefined {
        if (this.isEmpty())
            return undefined;

        const ans = this.top();

        if (this.size() === 1) {
            this.array.pop();
            return ans;
        }

        this.array[1] = this.array.pop()!;
        this.sink(1);

        return ans;
    }

    top(): number | undefined {
        if (this.isEmpty())
            return undefined;

        return this.array[1];
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

    public static run(fig: BinaryHeap): void {
        const nums: number[] = [2, 4, 6, 8, 10, 12];
        const k: number = 2;

        for (const num of nums) {
            fig.insert(num);

            if (fig.size() > k) {
                fig.remove();
            }
        }

        console.log(fig.toArray());
    }
}

export { BinaryHeap };