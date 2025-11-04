/* 721. accounts merge */

import { describe, expect, it } from 'vitest';
import { A } from './721a';

const approaches = [
    { solution: new A() },
];

const testCases = [
    {
        accounts: [
            ['neet', 'neet@gmail.com', 'neet_dsa@gmail.com'],
            ['alice', 'alice@gmail.com'],
            ['neet', 'bob@gmail.com', 'neet@gmail.com'],
            ['neet', 'neetcode@gmail.com']
        ],
        output: [
            ['neet', 'bob@gmail.com', 'neet@gmail.com', 'neet_dsa@gmail.com'],
            ['alice', 'alice@gmail.com'], ['neet', 'neetcode@gmail.com']
        ],
        description: 'test01',
    },
    {
        accounts: [
            ['James', 'james@mail.com'],
            ['James', 'james@mail.co']
        ],
        output: [
            ['James', 'james@mail.com'],
            ['James', 'james@mail.co']
        ],
        description: 'test02',
    },
];

approaches.forEach(({ solution }) => {
    describe('Accounts Merge', () => {
        testCases.forEach(({ accounts, output, description }) => {
            it(description, () => {
                const ans = solution.accountsMerge(accounts);

                expect(ans).toEqual(output);
            });
        });
    });
});