/* 871. keys and rooms */

abstract class KeyRoom {
    abstract canVisitAllRooms(rooms: number[][]): boolean;

    public static run(sol: KeyRoom): void {
        const rooms: number[][] = [
            [1, 3], [3, 0, 1], [2], [0]
        ];

        console.log(sol.canVisitAllRooms(rooms));
    }
}

export { KeyRoom as KeyRoom };