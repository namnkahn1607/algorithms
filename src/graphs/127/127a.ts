/* 127a. word ladder */
// @: bfs + hash
import { Queue } from 'datastructures-js';

class A {
    ladderLength(
        beginWord: string, endWord: string, wordList: string[]
    ): number {
        const len = beginWord.length;
        const patternMap = new Map<
            string, Array<string>
        >();

        for (const word of wordList) {
            for (let i = 0; i < len; ++i) {
                const pattern = word.slice(0, i) + '*' + word.slice(i + 1);

                if (!patternMap.has(pattern))
                    patternMap.set(pattern, []);

                patternMap.get(pattern)!.push(word);
            }
        }

        const queue = new Queue<string>([beginWord]);
        const visited = new Set<string>([beginWord]);
        let dist = 1;

        while (!queue.isEmpty()) {
            const curr = queue.dequeue()!;

            if (curr === endWord)
                return dist;

            for (let i = 0; i < len; ++i) {
                const pattern = curr.slice(0, i) + '*' + curr.slice(i + 1);

                for (const nei of patternMap.get(pattern) ?? []) {
                    if (visited.has(nei))
                        continue;

                    queue.enqueue(nei);
                    visited.add(nei);
                }
            }

            ++dist;
        }

        return 0;
    }
}

export { A };