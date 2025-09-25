/* 211. add and search word data structure */

import { Trie } from "../trie";

abstract class WordDict extends Trie {
    abstract addWord(word: string): void;

    abstract search(word: string): boolean;

    public static run(dict: WordDict): void {
        const args: string[] = [
            "day", "bay", "may", "say", "day", ".ay", "b.."
        ];

        const cmds: string[] = [
            "addWord", "addWord", "addWord", "search",
            "search", "search", "search"
        ];

        const ans: string[] = ["null"];

        for (let i = 0; i < args.length; ++i) {
            switch (cmds[i]) {
                case "addWord":
                    ans.push("null");
                    dict.addWord(args[i]);
                    break;

                case "search":
                    ans.push(String(dict.search(args[i])));
                    break;

                default:
                    throw new Error("No such operation found");
            }
        }

        console.log(ans.join(" "));
    }
}

export { WordDict as WordDict };