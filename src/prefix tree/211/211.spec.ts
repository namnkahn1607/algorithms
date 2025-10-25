/* 211. add and search word data structure */

import { WordDictionary } from "./211a";

const commandRunner = {
    addWord: (dict: WordDictionary, arg: string) => {
        dict.addWord(arg);
        return null;
    },
    search: (dict: WordDictionary, arg: string) => {
        return dict.search(arg);
    },
} as const;

const testCases = [
    {
        args: ["day", "bay", "may", "say", "day", ".ay", "b.."],
        cmds: [
            "addWord", "addWord", "addWord", "search", "search", "search", "search"
        ],
        output: [null, null, null, false, true, true, true],
        description: 'a sample test',
    },
];

describe('Add and Search Word Data Structure', () => {
    testCases.forEach(({ args, cmds, output, description }) => {
        it(description, () => {
            const dict = new WordDictionary();

            cmds.forEach((cmd, i) => {
                const ans = commandRunner[cmd as keyof typeof commandRunner](dict, args[i]);

                expect(ans).toBe(output[i]);
            });
        });
    });
});