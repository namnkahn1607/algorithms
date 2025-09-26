/* 208. implement prefix tree */

import { Trie } from "../trie";

abstract class _PrefixTree extends Trie {
    abstract insert(word: string): void;

    abstract search(word: string): boolean;

    abstract startsWith(prefix: string): boolean;

    public static run(fig: _PrefixTree): void {
        const args: string[] = [
            "apple", "apple", "app", "app", "app", "app"
        ];

        const cmds: string[] = [
            "insert", "insert", "search", "startsWith", "insert", "search"
        ];

        const ans: string[] = ["null"];

        for (let i = 0; i < args.length; ++i) {
            switch (cmds[i]) {
                case "insert":
                    fig.insert(args[i]);
                    ans.push("null");
                    break;

                case "search":
                    ans.push(String(fig.search(args[i])));
                    break;

                case "startsWith":
                    ans.push(String(fig.startsWith(args[i])));
                    break;

                default:
                    throw new Error("No such operation found");
            }
        }

        console.log(ans.join(" "));
    }
}

export { _PrefixTree as _PrefixTree };