/* 219. contains duplicate 2 */

abstract class ContainsDuplicate {
    abstract containsNearbyDuplicate(arr: number[], k: number): boolean;

    public static run(sol: ContainsDuplicate): void {
        const arr: number[] = [1, 2, 3, 1, 2, 3];
        const k: number = 2;
        console.log(sol.containsNearbyDuplicate(arr, k));
    }
}

export { ContainsDuplicate };