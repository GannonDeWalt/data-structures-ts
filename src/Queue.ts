import Node from "./Node";
export default class Queue {

  private nodes : Node[]

  constructor(){
    this.nodes = [];
  }

  isEmpty(){
    return this.nodes.length == 0;
  }

  enqueue(node : Node){
    this.nodes.push(node);
  }

  length(){
    return this.nodes.length;
  }

  front(){
    return this.nodes[0];
  }

  rear(){
    return this.nodes[this.nodes.length - 1];
  }

  dequeue(){
    return this.nodes.shift();
  }
}