/* 973. k closest points to origin */

abstract class ClosestPoints {
    abstract kClosest(points: number[][], k: number): number[][];

    public static run(sol: ClosestPoints): void {
        const points: number[][] = [
            [0, 2], [2, 0], [2, 2]
        ];

        const k: number = 2;

        console.log(sol.kClosest(points, k).map(
            val => val.join(",")
        ).join(" "));
    }
}

export { ClosestPoints };