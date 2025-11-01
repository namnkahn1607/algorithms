/* 871a. keys and rooms */
// @: dfs
import { KeyRoom } from "./run";

class A extends KeyRoom {
    canVisitAllRooms(rooms: number[][]): boolean {
        const visited = new Set<number>();

        const dfs = function(i: number): void {
            visited.add(i);

            for (const key of rooms[i]) {
                if (!visited.has(key))
                    dfs(key);
            }
        };

        dfs(0);

        return visited.size === rooms.length;
    }
}

A.run(new A());