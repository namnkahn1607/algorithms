/* 138a. copy list with random pointer */
// @: linked list
import { _Node } from "../random list";

class A {
    copyRandomList(head: _Node | null): _Node | null {
        if (!head) return null;

        const map = new Map<_Node | null, _Node | null>();

        const copy = (node: _Node | null): _Node | null => {
            if (!node) return null;

            if (map.has(node))
                return map.get(node)!;

            const clone = new _Node(node.val);
            map.set(node, clone);

            clone.next = copy(node.next);
            clone.random = copy(node.random);

            return clone;
        };

        return copy(head);
    }
}

export { A };