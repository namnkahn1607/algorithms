/* 374. guess number higher or lower */
// #: bs

class GuessGame {
    constructor(private readonly picked: number) {}

    /* API */
    private guess(num: number) {
        if (num > this.picked)
            return -1;
        else if (num < this.picked)
            return 1;

        return 0;
    }

    public guessNum(n: number): number {
        let low = 0, high = n;

        while (low <= high) {
            const mid = low + Math.trunc((high - low) / 2);

            switch (this.guess(mid)) {
                case -1:
                    high = mid - 1;
                    break;

                case 1:
                    low = mid + 1;
                    break;

                case 0:
                    return mid;
            }
        }

        return -1;
    }

    public static main(): void {
        // add range & picked number
        const n: number = 5;
        const picked: number = 2;

        if (picked < 0 || picked > n)
            throw new Error("picked number must be in range [0, n]");

        // find picked number
        const game: GuessGame = new GuessGame(picked);

        let ans: number = game.guessNum(n);
        console.log(ans, (ans === picked) ? "true" : "false");
    }
}

GuessGame.main();