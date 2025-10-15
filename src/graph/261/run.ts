/* 261. graph valid tree */

abstract class GraphTree {
    abstract validTree(n: number, edges: number[][]): boolean;

    public static run(sol: GraphTree): void {
        const n: number = 5;
        const edges: number[][] = [
            [0, 1], [0, 2], [0, 3], [1, 4]
        ];

        console.log(sol.validTree(n, edges));
    }
}

export { GraphTree };