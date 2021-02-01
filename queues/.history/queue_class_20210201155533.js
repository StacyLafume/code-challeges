class Queue {
    constructor(){
        this.queue = [];
    }

    dequeue = function() {
        return this.queue.shift();
    };

    enqueue = function(item) {
        this.queue.push(item);
      };

    size = function() {
        return this.queue.length;
    }; 
    
  };
  

  let q = new Queue()

  q.enqueue(1)
  q.enqueue(2)
  q.enqueue(3)
  console.log( q.size()) // 3

  q.dequeue()
  console.log( q.size()) // 2