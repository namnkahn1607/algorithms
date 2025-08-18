/* 1700. number of students unable to eat lunch */
// #: array + hash

class src1700 {
    countStudents(students: number[], sandwiches: number[]): number {
        const m: number = sandwiches.length;
        const studentPref: number[] = [0, 0];

        for (const student of students)
            ++studentPref[student];

        for (let i = 0; i < m; ++i) {
            const x = sandwiches[i];

            if (studentPref[x] === 0)
                return m - i;

            --studentPref[x];
        }

        return 0;
    }

    public static main(): void {
        // add students and sandwiches
        const students: number[] = [1, 1, 1, 0, 0, 1];
        const sandwiches: number[] = [1, 0, 0, 0, 1, 1];

        // calculate number of hungry students
        let ans: number = new src1700().countStudents(students, sandwiches);
        console.log(ans);
    }
}

src1700.main();