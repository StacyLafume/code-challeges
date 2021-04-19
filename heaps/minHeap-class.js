class MinHeap {
    constructor(){
         /* Initialing the array heap and adding a dummy element at index 0 */
        this.heap = [null]
    }

    getMin(){
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[1]
    }

    insert(node){
         /* Inserting the new node at the end of the heap array */
        this.heap.push(node)

        /* Finding the correct position  for the new node*/
        if(this.heap.length > 1){
            let current = this.heap.length - 1

            /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
            while(current > 1 && this.heap[Math.floor(current/2)]>this.heap[current]){

                /* Swapping the two nodes by using the ES6 destructuring syntax*/
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]

                current = Math.floor(current/2)
            }
        }
    }

    remove(){
        /* Smallest element is at the index 1 in the heap array */
        let smallest = this.heap[1]

         /* 
         When there are more than two elements in the array, we put the right most element at the first position and start comparing nodes with the child nodes
        */

       if(this.heap.length > 2){
            this.heap[1]
        }
    }

    

}