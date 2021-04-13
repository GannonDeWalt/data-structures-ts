import Node from "./Node";
export default class LinkedList {

  private size: number;
  public tail : Node | undefined;
  public head : Node | undefined;

  constructor(){
    this.head = undefined;
    this.tail = undefined;
    this.size = 0;

  }


  add(node : Node){
    if(!this.head) //if head does not exist
      this.head = node;

    this.tail.next = node;
    node.next = {} as Node;
    this.tail = node;

    this.size++;
  }

  remove(node : Node){

    if (node === this.head){ //if deleting head
      if(node.next)
        this.head = node.next;
      else
        this.head = undefined;
      this.tail = undefined;
    }

    var temp;
    for (var current = this.head; current; current = current.next){
      if(current.value === node.value){
        break;
      }//end if
      temp = current;
    }//end for

    if(!node.next){// if deleting the tail
      temp.next = undefined;
      this.tail = temp
    }
    else{ //if deleting neither head or tail
      temp.next = node.next;
    }



    
  }

  count(){
    return this.size;
  }

  find(value : any){
    for (var current = this.head; current; current = current.next){
      if(current.value === value){
        return current;
      }//end if
    }//end for
    return undefined;
  }

}