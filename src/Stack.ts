import Node from "./Node";
export default class Stack {
  private nodes: Node[];

  constructor(){
    this.nodes = [];
  }

isEmpty(){
  return this.nodes.length == 0;
}

push(node: Node){
  this.nodes.push(node);
}

count(){
  return this.nodes.length;
}


pop(){
  return this.nodes.pop();
}

peek(){
  if (!this.isEmpty())
    return this.nodes[this.nodes.length -1];
}
}