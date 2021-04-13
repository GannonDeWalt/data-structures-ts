import Queue from "../src/Queue";
import Node from "../src/Node";

test("Smoke test ...", () => {
    expect(true).toEqual(true);
});

describe("Queue", () => {
    let queue: Queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test("should be empty", () => {
        expect(queue.isEmpty()).toEqual(true);
    });

    test("enqueue() should add a node", () => {
        let node = new Node();
        queue.enqueue(node);
        expect(queue.isEmpty()).toEqual(false);
    });

    test("should return length", () => {
        let node = new Node();
        queue.enqueue(node);
        expect(queue.length()).toEqual(1);
    });

    test("should return front and rear node", () => {
        let firstNode = new Node();
        queue.enqueue(firstNode);
        queue.enqueue(new Node());
        queue.enqueue(new Node("End"));
        expect(firstNode).toEqual(queue.front());
        expect("End").toEqual(queue.rear().value);
    });

    test("dequeue() should remove a node FIFO", () => {
        let firstIn = new Node();
        let secondIn = new Node();
        queue.enqueue(firstIn);
        queue.enqueue(secondIn);
        let firstOut = queue.dequeue();
        expect(firstIn).toEqual(firstOut);
        expect(secondIn).toEqual(queue.front());
    });
})
