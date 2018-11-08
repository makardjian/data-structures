class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.size1 = 0;
  }

  push(value) {
    this.storage[this.size1] = value;
    this.size1++;
  };

  pop() { 
  	if (this.size1 !== 0) {
      this.size1--;
      var result = this.storage[this.size1];
      delete this.storage[this.size1];
      return result;
  	}
  };

  size() {
  	return this.size1;
  };
}

