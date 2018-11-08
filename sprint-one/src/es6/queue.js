class Queue {

  constructor() {
  	this.storage = {};
  	this.front = 0;
  	this.back = 0;
  }

  enqueue(value) {
  	this.storage[this.back] = value;
    this.back++;
  }

  dequeue() {
  	 if (this.back > this.front) {
      var result = this.storage[this.front];
      delete(this.storage[this.front]);
      this.front++;
      return result;
  	}
  }

  size() {
   return (this.back - this.front);
  }

}