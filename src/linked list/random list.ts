/* data structures: Random Linked List */

class _Node {
    constructor(
        public val: number,
        public next: _Node | null = null,
        public random: _Node | null = null,
    ) {}
}

class RandomList {
    public static create(grid: [number, number | null][]): _Node | null {
        if (!grid?.length || grid[0] === undefined)
            return null;

        const nodes = new Array<_Node>(grid.length);
        nodes[0] = new _Node(grid[0][0]);

        for (let i = 1; i < grid.length; ++i)
            nodes[i - 1].next = nodes[i] = new _Node(grid[i][0]);

        for (let i = 0; i < grid.length; ++i) {
            if (grid[i][1] !== null)
                nodes[i].random = nodes[grid[i][1]!];
        }

        return nodes[0];
    }

    public static toArray(head: _Node | null): string[] {
        const map = new Map<_Node, number>();
        let curr = head;
        let i = 1;

        while (curr) {
            map.set(curr, i++);
            curr = curr.next;
        }

        const ans: string[] = [];
        curr = head;

        while (curr) {
            ans.push(`${curr.val},${curr.random ? map.get(curr.random) : null}`)
            curr = curr.next;
        }

        return ans;
    }
}

export { _Node, RandomList };