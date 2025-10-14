/* 622. design circular queue */
// @: linked list
import { CQueue } from "./run";

class CircularQueue extends CQueue {
    constructor(k: number,
        private array = new Array<number>(k),
        private size = 0,
        private capacity = k,
        private front = 0,
        private rear = -1,
    ) {
        super();
    }

    enQueue(val: number): boolean {
        if (this.isFull())
            return false;

        this.rear = (this.rear + 1) % this.capacity;
        this.array[this.rear] = val;
        ++this.size;
        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty())
            return false;

        this.front = (this.front + 1) % this.capacity;
        --this.size;
        return true;
    }

    Front(): number {
        return this.isEmpty() ? -1 : this.array[this.front];
    }

    Rear(): number {
        return this.isEmpty() ? -1 : this.array[this.rear];
    }

    isFull(): boolean {
        return this.size === this.capacity;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }
}

CircularQueue.run(new CircularQueue(3));