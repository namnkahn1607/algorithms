/* 994. rotting fruit */

abstract class DomainExpansion {
    abstract fruitRotting(grid: number[][]): number;

    public static run(sol: DomainExpansion): void {
        const grid: number[][] = [
            [1, 1, 0], [0, 1, 1], [0, 1, 2]
        ];

        console.log(sol.fruitRotting(grid));
    }
}

export { DomainExpansion };