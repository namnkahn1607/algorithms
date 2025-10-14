/* 246. asteroid collision */

abstract class AsteroidCollision {
    abstract asteroidCollision(astr: number[]): number[];

    public static run(sol: AsteroidCollision): void {
        const astr: number[] = [2, 4, -4, 2];
        console.log(sol.asteroidCollision(astr).join(" "));
    }
}

export { AsteroidCollision };