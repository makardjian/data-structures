var Queue = function() {
var someInstance = {};

  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
}


var queueMethods = {};


queueMethods.enqueue = function(value) {
    this.storage[this.back] = value;
    this.back++;
  };

  queueMethods.dequeue = function() {
    if (this.back > this.front) {
      var result = this.storage[this.front];
      delete(this.storage[this.front]);
      this.front++;
      return result;
    }
  };

  queueMethods.size = function() {
    return (this.back - this.front)

  };