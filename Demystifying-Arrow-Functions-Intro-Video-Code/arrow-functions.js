// () => {} over function() { }

// Syntax
// =>

const sayHello = () => console.log('Hello ');
sayHello();

// Single parameter
const add2ToNumber = number => number + 2;
console.log(add2ToNumber(3));

// Multiple parameters
const sumFunction = (numberOne, numberTwo) => numberOne + numberTwo;

const result = sumFunction(2, 3);
console.log(result);

const sumFunctionTwo = (numberOne, numberTwo) => {
  console.log('Number one is ready');
  console.log('Number two is ready');
  return numberOne + numberTwo;
};

// Returning objects
// const details = name => ({ firstName: name });
// console.log(details('Prateek'));
const details = name => {
  return {
    firstName: name
  };
};
console.log(details('Prateek'));
