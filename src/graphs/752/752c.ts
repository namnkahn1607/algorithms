/* 752c. open the lock */
// @: bidirectional bfs

class C {
    openLock(deadends: string[], target: string): number {
        if (target === '0000')
            return 0;

        const visited = new Set<string>(deadends);

        if (visited.has('0000'))
            return -1;

        let begin = new Set<string>(['0000']);
        let end = new Set<string>([target]);
        let dist = 0;

        while (begin.size > 0 && end.size > 0) {
            if (begin.size > end.size)
                [begin, end] = [end, begin];

            ++dist;
            let temp = new Set<string>();

            for (const curr of begin) {
                for (let i = 0; i < 4; ++i) {
                    for (const delta of [-1, 1]) {
                        const digit = (+curr[i] + delta + 10) % 10;
                        const child = curr.slice(0, i) + digit + curr.slice(i + 1);

                        if (end.has(child))
                            return dist;

                        if (!visited.has(child)) {
                            visited.add(child);
                            temp.add(child);
                        }
                    }
                }
            }

            begin = temp;
        }

        return -1;
    }
}

export { C };