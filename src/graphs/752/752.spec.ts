/* 752. open the lock */

import { describe, expect, it } from "vitest";
import { A } from './752a';
import { B } from './752b';
import { C } from './752c';

const approaches = [
    { solution: new A() },
    { solution: new B() },
    { solution: new C() },
];

const testCases = [
    {
        deadends: ['1111', '0120', '2020', '3333'],
        target: '5555',
        output: 20,
        description: 'trivial-01',
    },
    {
        deadends: ['4443', '4445', '4434', '4454', '4344', '4544', '3444', '5444'],
        target: '4444',
        output: -1,
        description: 'deadends covering target',
    },
    {
        deadends: ['0201', '0101', '0102', '1212', '2002'],
        target: '0202',
        output: 6,
        description: 'trivial-02',
    },
    {
        deadends: ['8888'],
        target: '0009',
        output: 1,
        description: 'one turn',
    },
    {
        deadends: ['0000'],
        target: '8888',
        output: -1,
        description: 'locked lock',
    },
    {
        deadends: ['9000', '0900', '0090', '0009'],
        target: '8888',
        output: 10,
        description: 'clever turn',
    },
];

approaches.forEach(( { solution }) => {
    describe('Open the Lock', () => {
        testCases.forEach(({ deadends, target, output, description }) => {
            it(description, () => {
                const ans = solution.openLock(deadends, target);

                expect(ans).toEqual(output);
            });
        });
    });
});