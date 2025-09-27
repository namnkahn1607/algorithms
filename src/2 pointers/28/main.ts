/* 28. needle in haystack */

abstract class NeedleHaystack {
    abstract strStr(haystack: string, needle: string): number;

    public static run(sol: NeedleHaystack): void {
        const haystack: string = "needcodeneetcode";
        const needle: string = "neet";

        console.log(sol.strStr(haystack, needle));
    }
}

export { NeedleHaystack };