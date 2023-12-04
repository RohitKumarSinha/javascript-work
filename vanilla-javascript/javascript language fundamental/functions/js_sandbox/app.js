// FUNCTION DECLARTIONS 

function greet(firstName = 'Rohit', lastName = 'Sinha'){
  // if (typeof firstName === 'undefined'){
  //   firstName = 'Rohit';
  // } else {
  //   lastName = 'Sinha';
  // }

  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3){
  return x * x;
};

// console.log(square());

// IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IFEE Ran..');
// })();

(function(name){
  console.log('IFEE Ran..');
})('rohit');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();