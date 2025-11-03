/* 871b. keys and rooms */
// @: bfs
import { Queue } from "datastructures-js";

class B {
    canVisitAllRooms(rooms: number[][]): boolean {
        const visited = new Set<number>();
        const queue = new Queue<number>([0]);

        while (!queue.isEmpty()) {
            const curr = queue.dequeue()!;
            visited.add(curr);

            for (const key of rooms[curr]) {
                if (!visited.has(key))
                    queue.enqueue(key);
            }
        }

        return visited.size === rooms.length;
    }
}

export { B };