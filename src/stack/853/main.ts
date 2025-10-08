/* 853. car fleet */

abstract class Fleet {
    abstract carFleet(target: number, position: number[], speed: number[]): number;

    public static run(sol: Fleet): void {
        const target: number = 10;
        const position: number[] = [4, 1, 0, 7];
        const speed: number[] = [2, 2, 1, 1];

        console.log(sol.carFleet(target, position, speed));
    }
}

export { Fleet };