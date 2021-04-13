import Stack from "../src/Stack";
import Node from "../src/Node";

test("Smoke test ...", () => {
    expect(true).toEqual(true);
});

describe("Stack", () => {
    let stack: Stack;

    beforeEach(() => {
        stack = new Stack();
    })

    test("should be empty on instantiation", () => {
        expect(stack.isEmpty()).toBeTruthy()
    });

    test("push() should add a node", () => {
        let node: Node = new Node();
        stack.push(node);
        expect(stack.isEmpty()).toBeFalsy();
    });
    
    test("count() should count its nodes", () => {
        let node: Node = new Node();
        stack.push(node);
        stack.push(node);
        expect(stack.count()).toEqual(2);
    });
    
    test("pop() should remove the last node added", () => {
        let node1: Node = new Node();
        let node2: Node = new Node();
        stack.push(node1);
        stack.push(node2);
        let lastNode = stack.pop();
        expect(lastNode).toEqual(node2);
    });
    
    test("peek() should return the top node", () => {
        let node1: Node = new Node();
        let node2: Node = new Node();
        stack.push(node1);
        stack.push(node2);
        expect(stack.peek()).toEqual(node2);
    });
})
