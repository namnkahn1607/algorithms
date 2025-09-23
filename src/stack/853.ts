/* 853. car fleet */
// #: stack

class src853 {
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = position.map((pos, i) => [pos, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);

        let fleet = 1;
        let prevTime = (target - cars[0][0]) / cars[0][1];

        for (let i = 1; i < cars.length; ++i) {
            const curr = cars[i];
            const currTime = (target - curr[0]) / curr[1];

            if (currTime > prevTime) {
                ++fleet;
                prevTime = currTime;
            }
        }

        return fleet;
    }

    public static main(): void {
        // add target, positions & speeds
        const target: number = 10;
        const position: number[] = [4, 1, 0, 7];
        const speed: number[] = [2, 2, 1, 1];

        // calculate number of car fleets reaching target
        let ans: number = new src853().carFleet(target, position, speed);
        console.log(ans);
    }
}

src853.main();