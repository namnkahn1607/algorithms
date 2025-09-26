/* data structures: Quad Tree */

export class _Node {
    constructor(
        public val: boolean = false,
        public isLeaf: boolean = false,
        public topLeft: _Node | null = null,
        public topRight: _Node | null = null,
        public bottomLeft: _Node | null = null,
        public bottomRight: _Node | null = null
    ) {}
}

export class QuadTree {
    public static printQuadTree(head: _Node | null): void {

    }
}