var Stack = function() {
  
  var someInstance = Object.create(stackMethods)

  someInstance.storage = {};
  someInstance.size1 = 0;
  return someInstance;
};


var stackMethods = {}

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
















//THIS BELOW CODE SHOULD WORK AND, TO MY KNOWLEDGE, REPRESENTS WHAT PROTOTYPAL CLASSES ARE. 
// Stack.prototype.push = function(value) {
//     this.storage[this.size1] = value;
//     this.size1++;
//   }


// Stack.prototype.pop = function() {
//     if (this.size1 !== 0) {
//       this.size1--;

//       var result = this.storage[this.size1];
//       delete this.storage[this.size1];
//       return result;
//     }

//   }

// Stack.prototype.size = function() {
//     return this.size1;
//   }



