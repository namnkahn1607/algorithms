/* 71a. simplify path */
// @: stack

class A {
    simplifyPath(path: string): string {
        const files: string[] = [];
        let name = "";

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

        let ans = "";

        for (const file of files)
            ans += ("/" + file);

        return (ans === "") ? "/" : ans;
    }
}

export { A };