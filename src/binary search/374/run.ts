/* 374. guess number higher or lower */

abstract class GuessGame {
    private picked: number = 0;

    private setPicked(num: number): void {
        this.picked = num;
    }

    protected guess(num: number) {
        if (num > this.picked) return -1;
        if (num < this.picked) return 1;
        return 0;
    }

    abstract guessNum(n: number): number;

    public static run(fig: GuessGame): void {
        const n: number = 5;
        const picked: number = 2;
        fig.setPicked(picked);

        console.log(fig.guessNum(n));
        console.log(fig.guessNum(n) === picked);
    }
}

export { GuessGame };