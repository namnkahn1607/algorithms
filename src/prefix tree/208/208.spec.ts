/* 208. implement prefix tree */

import { describe, expect, it } from "vitest";
import { PrefixTree } from "./208a";

const commandRunner = {
    insert: (trie: PrefixTree, arg: string) => {
        trie.insert(arg);
        return null;
    },
    search: (trie: PrefixTree, arg: string) => {
        return trie.search(arg);
    },
    startsWith: (trie: PrefixTree, arg: string) => {
        return trie.startsWith(arg);
    },
} as const;

const testCases = [
    {
        args: ["apple", "apple", "app", "app", "app", "app"],
        cmds: ["insert", "insert", "search", "startsWith", "insert", "search"],
        output: [null, null, false, true, null, true],
        description: 'a sample test',
    },
];

describe('Implement Prefix Tree', () => {
    testCases.forEach(({ args, cmds, output, description }) => {
        it(description, () => {
            const trie = new PrefixTree();

            cmds.forEach((cmd, i) => {
                const ans = commandRunner[cmd as keyof typeof commandRunner](trie, args[i]);

                expect(ans).toBe(output[i]);
            });
        });
    });
});