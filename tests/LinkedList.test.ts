import LinkedList from "../src/LinkedList";
import Node from "../src/Node";


test("Smoke test ...", () => {
    expect(true).toEqual(true);
});

describe("LinkedList", () => {
    let linkedList: LinkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    })

    test("should return head node", () => {
        let node = new Node();
        linkedList.add(node)
        expect(linkedList.head).toBeTruthy()
    });

    test("should add new node to end of the list", () => {
        let aNode = new Node();
        let bNode = new Node();
        linkedList.add(aNode);
        linkedList.add(bNode);
        expect(linkedList.head).toEqual(aNode);
        expect(aNode.next).toEqual(bNode);
    })

    test("should return total count of nodes", () => {
        let node = new Node();
        linkedList.add(node)
        expect(linkedList.count()).toEqual(1)
    });

    test("should find a node and return it", () => {
        let node = new Node("Shoe");
        let node2 = new Node("Pencil");
        linkedList.add(node)
        linkedList.add(node2)
        let result = linkedList.find("Shoe");
        expect(result).toEqual(node);
    });

    // test("should remove a node", () => {
    //     let aNode = new Node();
    //     let bNode = new Node();
    //     let cNode = new Node();
    //     let dNode = new Node();
    //     linkedList.add(aNode)
    //     linkedList.add(bNode)
    //     linkedList.add(cNode)
    //     linkedList.add(dNode)
    //     linkedList.remove(cNode);
    //     expect(linkedList.count()).toEqual(3);
    //     expect(bNode.next).toEqual(dNode);
    // });
})
