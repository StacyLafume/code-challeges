var Queue = function() {
    this._queue = [];
  };
  
  Queue.prototype.enqueue = function(item) {
    this._queue.push(item);
  };
  
  Queue.prototype.dequeue = function() {
    return this._queue.shift();
  };
  
  Queue.prototype.size = function() {
    return this._queue.length;
  };