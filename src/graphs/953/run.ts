/* 953. verify an alien dictionary */

abstract class AlienDict {
    abstract isAlienSorted(word: string[], order: string): boolean;

    public static run(sol: AlienDict): void {
        const words: string[] = ["dag", "disk", "dog"];
        const order: string = "hlabcdefgijkmnopqrstuvwxyz";

        console.log(sol.isAlienSorted(words, order));
    }
}

export { AlienDict };