var Stack = function() {
	this.storage = {};
	this.size1 = 0
};


Stack.prototype.push = function(value) {
    this.storage[this.size1] = value;
    this.size1++;
  }


Stack.prototype.pop = function() {
    if (this.size1 !== 0) {
      this.size1--;

      var result = this.storage[this.size1];
      delete this.storage[this.size1];
      return result;
    }
  }

Stack.prototype.size = function() {
    return this.size1;
  }
