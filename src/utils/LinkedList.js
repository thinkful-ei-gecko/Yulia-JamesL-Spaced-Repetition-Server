class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, null);
  }
  insertLast(item) {
    if (this.head === null) this.insertFirst(item);
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) tempNode = tempNode.next;
      tempNode.next = new _Node(item, null);
    }
  }
  remove(item) {
    console.log('REMOVING--->')
    if (!this.head) return null;
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  insertBefore(item, key) {
    if (this.head === null) {
      console.log('Key does not exist');
      return null;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode.value !== key && currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('key not found');
      return;
    }
    prevNode.next = new _Node(item, currNode);
  }
  insertAfter(item, key) {
    if (this.head === null) {
      console.log('Key does not exist');
      return null;
    }
    let currNode = this.head;
    while (currNode.value !== key && currNode !== null) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('key not found');
      return;
    }
    let tempNode = currNode.next;
    currNode.next = new _Node(item, tempNode);
  }
  // insertAt(item, position) {
  //   if (this.head === null) {
  //     if (position === 1) {
  //       this.insertFirst(item);
  //       return;
  //     } else {
  //       this.insertLast(item);
  //       return;
  //     }
  //   }
  //   let currentPosition = 1;
  //   let currNode = this.head;
  //   let prevNode = this.head;
  //   while (currentPosition !== position && currNode !== null) {
  //     prevNode = currNode;
  //     currNode = currNode.next;
  //     currentPosition++;
  //   }
  //   if (currNode === null) {
  //     this.insertLast(item);
  //   }
  //   let tempNode = currNode;
  //   let newNode = new _Node(item, tempNode)
  //   prevNode.next = newNode;
  // }
  
  insertAt(itemToInsert, nthPosition) { 
    
    if (nthPosition < 0) { 
      throw new Error('Position error'); 
    } 
    if (nthPosition === 0) { 
      this.insertFirst(itemToInsert); 
    }else { 
      const node = this._findNthElement(nthPosition - 1); 
      const newNode = new _Node(itemToInsert, null); 
      newNode.next = node.next; 
      node.next = newNode; 
    } 
  }
  
  _findNthElement(position) { 
    let node = this.head; 
    for (let i=0; i<position; i++) { 
      node = node.next; 
    } 
    return node; 
  }
}


module.exports = { LinkedList};