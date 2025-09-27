/* 79. word search */

abstract class SearchWord {
    abstract exist(board: string[][], word: string): boolean;

    public static run(sol: SearchWord): void {
        const board: string[][] = [
            ["A", "B", "C", "D"],
            ["S", "A", "A", "I"],
            ["A", "C", "A", "E"]
        ];

        const word: string = "CAT";

        console.log(sol.exist(board, word));
    }
}

export { SearchWord };