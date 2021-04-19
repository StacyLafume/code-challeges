// array of mixed values
// return number
// nums that are string need to be changed to type numbers 
//['2',3,'5'] => 10
// [1,2,3,'a',3]
// [] 
// all positive numbers 
// reduce method +acc + +cv 

const sumAll = array => array.reduce((acc, cv) => +acc + +cv, 0)


console.log(sumAll(['2',3,'5'])) //=> 10
console.log(sumAll(['3',6,'100'])) //=> 109
console.log(sumAll(['1',10,'2'])) //=> 13


let MinHeap = function() {
	
	let heap = [null];
	
	this.insert = function(num) {
        // add num to the end of array
        heap.push(num);
        // if there is more than one thing in our heap
		if (heap.length > 2) {
            // assign the idx to the index of the inserted element
            let idx = heap.length - 1;
            // while num is less than its parent
			while (heap[idx] < heap[Math.floor(idx/2)]) {
                // if we have not reached the root node
				if (idx >= 1) {
                    // swap parent node with num
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
                    // if the parent node is not the root node 
					if (Math.floor(idx/2) > 1) {
                        // move idx to parent index
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
        // smallest element
        let smallest = heap[1];
        // more than one element in the array
		if (heap.length > 2) {
            // reassign first element the last element of heap
            heap[1] = heap[heap.length - 1];
            // remove last element 
            heap.splice(heap.length - 1);
            // if there are two elements in the heap
			if (heap.length == 3) {
                // if the root is greater than child
				if (heap[1] > heap[2]) {
                    // swap the root with child
					[heap[1], heap[2]] = [heap[2], heap[1]];
                };
                // return smallest
				return smallest;
            };
            // pointer to root 
            let i = 1;
            // pointer to left node 
            let left = 2 * i;
            // pointer to right node
            let right = 2 * i + 1;
            //while the root node is more than  or equal to the left 
            //or the  root node is more than  or equal to the right 
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
                // if left is less than right
				if (heap[left] < heap[right]) {
                    // swap left with root
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    // move index to left node 
					i = 2 * i
				} else {
                     // swap right with root
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    // move index to right node 
					i = 2 * i + 1;
                };
                // set the new left and right nodes
				left = 2 * i;
                right = 2 * i + 1;
                // if at the end of the heap end the loop
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
            };
            // if there is inly one element in the heap array
		} else if (heap.length == 2) {
            // remove first element
			heap.splice(1, 1);
		} else {
            // if there is nothing in heap
			return null;
        };
        // return smallest
		return smallest;
	};
  
	this.sort = function() {
        // create a new array
        let result = new Array();
        // while there are items in the array
		while (heap.length > 1) {
            // push the smallest element into 
			result.push(this.remove());
        };
        // return result
		return result;
	};

};
