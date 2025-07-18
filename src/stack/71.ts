/* 71. simplify path */
// #: stack

class src71 {
    static simplifyPath(path: string): string {
        const files: string[] = [];
        let name: string = "";

        for (const c of path + "/") {
            if (c === "/") {
                if (name.length > 0) {
                    if (name === "..") {
                        if (files.length > 0)
                            files.pop();
                    } else if (name !== ".")
                        files.push(name);

                    name = "";
                }
            } else {
                name += c;
            }
        }

        let ans: string = "";

        for (const file of files)
            ans += ("/" + file);

        return (ans === "") ? "/" : ans;
    }

    public static main(): void {
        // add directory
        const path: string = "/..//_home/a/b/..///";

        // canonically simplify the directory
        let ans: string = src71.simplifyPath(path);
        console.log(ans);
    }
}

src71.main();