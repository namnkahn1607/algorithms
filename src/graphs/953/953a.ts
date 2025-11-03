/* 953a. verify an alien dictionary */
// @: wat is this?

class A {
    isAlienSorted(words: string[], order: string): boolean {
        const ord = new Map<string, number>();

        for (let i = 0; i < 26; ++i)
            ord.set(order[i], i);

        const compare = (w1: string, w2: string, i: number): boolean => {
            if (i === Math.min(w1.length, w2.length))
                return w1.length <= w2.length;

            const diff = ord.get(w1[i])! - ord.get(w2[i])!;

            if (diff < 0) return true;
            if (diff > 0) return false;

            return compare(w1, w2, i + 1);
        };

        for (let i = 0; i < words.length - 1; ++i) {
            if (!compare(words[i], words[i + 1], 0))
                return false;
        }

        return true;
    }
}

export { A };