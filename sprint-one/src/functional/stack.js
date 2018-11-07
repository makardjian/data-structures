var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size !== 0) {
      size--;

      var result = storage[size];
      delete storage[size];
      return result;
    }

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

/*
Example of a stack instance:

var stack 1 = {
  push = function(){},

  pop = function(){},

  size = function(){}
}

*/
// // stack.push('a');

//   storage = {
//     0: 'a'
//   }
//   size = 1

// // expect(stack.pop()).to.equal('a');
//   storage = {
//   }

//   size = 0 
//  How can I remove a property from a given stack and at the same time return that value at that property???


// // stack.push('b');

//  size = 1

// expect(stack.pop()).to.equal('b');





