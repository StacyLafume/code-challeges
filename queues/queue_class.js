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

    first = function(){
        return this.queue[0]
    }
    last = function(){
        return this.queue[this.queue.length - 1]
    }
    
  };
  

  let q = new Queue()

  q.enqueue(1)
  q.enqueue(2)
  q.enqueue(3)
  console.log(q.first()) // 1
  console.log(q.last()) // 3
  console.log( q.size()) // 3

  q.dequeue()
  console.log( q.size()) // 2

  