/* 207a. course schedule */
// @: graph + dfs

class A {
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adjList = createAdjList(numCourses, prerequisites);
        const colors = new Array(numCourses).fill(0);

        const dfs = (vertex: number): boolean => {
            if (colors[vertex] === 1) return true;
            if (colors[vertex] === 2) return false;

            colors[vertex] = 1;

            for (const nei of adjList[vertex]) {
                if (dfs(nei)) return true;
            }

            colors[vertex] = 2;
            return false;
        };

        for (let i = 0; i < numCourses; ++i) {
            if (dfs(i)) return false;
        }

        return true;
    }
}

const createAdjList = (
    numCourses: number, prerequisites: number[][]
): number[][] => {
    const adjList = Array.from({
        length: numCourses
    }, () => new Array<number>());

    for (const [dst, src] of prerequisites) {
        adjList[src].push(dst);
    }

    return adjList;
};

export { A, createAdjList };