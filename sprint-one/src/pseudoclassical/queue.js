var Queue = function() {
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

Queue.prototype.enqueue = function(value) {
    this.storage[this.back] = value;
    this.back++;
  };

  Queue.prototype.dequeue = function() {
    if (this.back > this.front) {
      var result = this.storage[this.front];
      delete(this.storage[this.front]);
      this.front++;
      return result;
    }
  };

  Queue.prototype.size = function() {
    return this.back - this.front;
  };


