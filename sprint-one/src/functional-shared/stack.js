
var Stack = function() {

  var someInstance = {};
  someInstance.storage = {};
  someInstance.size1 = 0;
  _.extend(someInstance, stackMethods)
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
    this.storage[this.size1] = value;
    this.size1++;
  }

stackMethods.pop = function() {
    if (this.size1 !== 0) {
      this.size1--;

      var result = this.storage[this.size1];
      delete this.storage[this.size1];
      return result;
    }

  }

  stackMethods.size = function() {
    return this.size1;
  }

  













