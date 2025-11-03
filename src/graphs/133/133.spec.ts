/* 133. clone graph */

import { describe, expect, it } from "vitest";
import { _Node, Graph } from "../graph";
import { A } from './133a';
import { B } from './133b';

const approaches = [
    { solution: new A() }, { solution: new B() },
];

const testCases = [
    {
        graph: [
            [2, 4], [1, 3], [2, 4], [1, 3]
        ],
        description: 'a sample test',
    },
];

approaches.forEach(({ solution }) => {
    describe('Clone Graph', () => {
        testCases.forEach(({ graph, description }) => {
            it(description, () => {
                const node: _Node | null = Graph.createGraph(graph);
                const clone = solution.cloneGraph(node);

                expect(clone).toEqual(node);
            });
        });
    });
});