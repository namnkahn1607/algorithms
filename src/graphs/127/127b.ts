/* 127b. word ladder */
// @: bidirectional bfs
import { Queue } from 'datastructures-js';

class B {
    ladderLength(
        beginWord: string, endWord: string, wordList: string[]
    ): number {
        if (!wordList.includes(endWord))
            return 0;

        const len = beginWord.length;
        const wordSet = new Set<string>(wordList);
        let [qb, qe] = [
            new Queue<string>([beginWord]),
            new Queue<string>([endWord])
        ];
        let [fb, fe] = [
            new Map<string, number>([[beginWord, 1]]),
            new Map<string, number>([[endWord, 1]])
        ];

        while (!qb.isEmpty() && !qe.isEmpty()) {
            if (qb.size() > qe.size()) {
                [qb, qe] = [qe, qb];
                [fb, fe] = [fe, fb];
            }

            const expand = qb.size();

            for (let i = 0; i < expand; ++i) {
                const word = qb.dequeue()!;
                const steps = fb.get(word)!

                for (let j = 0; j < len; ++j) {
                    for (let c = 97; c < 123; ++c) {
                        const char = String.fromCharCode(c);

                        if (char === word[j])
                            continue;

                        const nei = word.slice(0, j)
                            + char + word.slice(j + 1);

                        if (!wordSet.has(nei)) continue;
                        if (fe.has(nei)) return steps + fe.get(nei)!;

                        if (!fb.has(nei)) {
                            fb.set(nei, steps + 1);
                            qb.enqueue(nei);
                        }
                    }
                }
            }
        }

        return 0;
    }
}

export { B };