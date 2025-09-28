/* 739. daily temperatures */

abstract class DailyTemp {
    abstract dailyTemperatures(tmps: number[]): number[];

    public static run(sol: DailyTemp): void {
        const tmps: number[] = [30, 38, 30, 36, 35, 40, 28];
        console.log(sol.dailyTemperatures(tmps).join(" "));
    }
}

export { DailyTemp };