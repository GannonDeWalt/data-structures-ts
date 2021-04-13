import Graph from "../src/graphs/Graph";
import GraphNode from "../src/graphs/GraphNode";


test("Smoke test ...", () => {
    expect(true).toEqual(true);
});

describe("Graph", () => {
    let graph: Graph;

    beforeEach(() => {
        graph = new Graph();
    });

    test("should instantiate", () => {
        expect(graph).toBeTruthy();
    });

    test("should add a node", () => {
        let node = new GraphNode();
        graph.add(node);
        expect(graph.size()).toEqual(1);
    });
    
    test("should add a list of nodes", () => {
        let nodes = [];
        nodes.push(new GraphNode());
        nodes.push(new GraphNode());
        graph.addAll(nodes);
        expect(graph.size()).toEqual(2);
    });
    //
    // test("should create an edge between 2 nodes", () => {
    //     let aladin = new GraphNode("Aladin");
    //     let genie = new GraphNode("Genie");
    //     graph.connect(aladin, genie);
    //     expect(graph.isAdjacent(aladin, genie)).toBeTruthy();
    // });
    //
    // test("should return all adjacent nodes", ()=> {
    //     let andre = new GraphNode("Andre");
    //     createFriendGraph(andre);
    //     let andresFriends = graph.getNeighbors(andre)
    //     expect(andresFriends.length).toEqual(2);
    // });
    //
    // test("should remove the edge between 2 nodes", () => {
    //     let aladin = new GraphNode("Aladin");
    //     let genie = new GraphNode("Genie");
    //     graph.disconnect(aladin, genie);
    //     expect(graph.isAdjacent(aladin, genie)).toBeFalsy();
    // });

    // Test Utilities ---------------------------------
    /*
    function createFriendGraph(subject: GraphNode) {
        let alan  = new GraphNode("Alan");
        let jin = new GraphNode("Jin");
        let hanan = new GraphNode("Hanan");
        let shonda = new GraphNode("Shonda");
        let friends = [shonda, alan, jin, hanan];
        graph.add(subject);
        graph.addAll(friends);
        graph.connect(subject, jin);
        graph.connect(subject, shonda);
        graph.connect(jin,shonda);
        graph.connect(shonda, hanan);
        return friends;
    }*/
})
