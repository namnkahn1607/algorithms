/* 1456. maxima number of vowels in a substr */

abstract class VowelSequence {
    abstract maxVowels(str: string, k: number): number;

    public static run(sol: VowelSequence): void {
        const str: string = "abciiidef";
        const k: number = 3;

        console.log(sol.maxVowels(str, k));
    }
}

export { VowelSequence };