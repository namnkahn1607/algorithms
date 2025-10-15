/* 424. longest repeating character replacement */

abstract class CharReplace {
    abstract characterReplacement(str: string, k: number): number;

    public static run(sol: CharReplace): void {
        const str: string = "AAAAABBCCBB";
        const k: number = 2;

        console.log(sol.characterReplacement(str, k));
    }
}

export { CharReplace };