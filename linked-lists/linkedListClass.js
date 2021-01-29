class Node{
    //node class- item
    //takes in a value 
    //and next (pointer) starting as null
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    //class creating + updating list/s
    //keeps track of head, tail, length 
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }


    size() {
        let count = 0; 
        let node = this.head;
        // while node is not null
        while (node) {
            // increment count
            count++;
            // reassign node to node next val
            node = node.next
        }
        //return count 
        return count;
    }

    clear() {
        // assign the head tp null
        this.head = null;
    }

    getLast() {
        // place value of head in a variable 
        let lastNode = this.head;
        // if lastNode is not null
        if (lastNode) {
            //loop while lastNode.next is not null
            while (lastNode.next) {
                //reassign last node down the list
                lastNode = lastNode.next
            }
        }
        //  return lastNode
        return lastNode
    }

    getFirst() {
        // return the head 
        return this.head;
    }
}