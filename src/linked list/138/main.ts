/* 138. copy list with random pointer */

import { RandomList, _Node } from "../random list";
import _ from "lodash";

abstract class CopyRList {
    abstract copyRandomList(head: _Node | null): _Node | null;

    public static run(sol: CopyRList): void {
        const head = RandomList.createRandomList([
            [3, null], [7, 3], [4, 0], [5, 1]
        ]);

        RandomList.printRandomList(sol.copyRandomList(head));
        RandomList.printRandomList(_.cloneDeep(head));
    }
}

export { CopyRList };