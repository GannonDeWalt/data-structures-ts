import GraphNode from "./GraphNode";

export default class Graph {
  private flag: boolean; 
  private nodes: GraphNode[];
  private count: number;
  
  //constructor
  constructor(){
    this.flag = true;
    this.nodes = []; 
    this.count = 0;
  }
  add(node : GraphNode){
    this.nodes.push(node);
    this.count = this.count + 1;
    return;}

  size(){return this.nodes.length;} //TODO add array of graph nodes

  addAll(nodes : GraphNode[]){
    for(var i = 0; i < nodes.length; i++){
      this.add(nodes[i]);
    } //end for
  }
  connect(node1: GraphNode, node2: GraphNode){
    node1.addEdge(node2); //add add node2 to edge list of node1
    node2.addEdge(node1);
    this.add(node1);
    this.add(node2);
    return;
  }
  isAdjacent(node1 : GraphNode, node2 : GraphNode){
    return node1.edges.includes(node2);
  }
  
  getNeighbors(node : GraphNode){
    return node.edges;
  }

  disconnect(node1 : GraphNode, node2 : GraphNode){
    node1.edges.splice(node1.edges.indexOf(node2)); //find index, remove from edge list
    node2.edges.splice(node2.edges.indexOf(node1));
  }

}//end Graph
