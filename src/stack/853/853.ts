/* 853. car fleet */
// @: stack
import { Fleet } from "./run";

class A extends Fleet {
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
}

A.run(new A());