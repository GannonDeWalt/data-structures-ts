export default class GraphNode {

  public edges : GraphNode[];
  public name: string;


  constructor(name ?: string){
    this.edges = [];
    if (name === undefined){
      this.name = '';
    }
    else{
      this.name = name;
    }

  }

  addEdge(node: GraphNode){
    this.edges.push(node);
  }

}
