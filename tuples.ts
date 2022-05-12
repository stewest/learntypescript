// Object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// TUPLE

// Array will always have very consistent order of elements.
const pepsi: [string, boolean, number] = ['brown', true, 40];
// can do this ^^ can do Type Alias like this :

type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 40];

// edge case
const carSpecs: [number, number] = [400, 3354]; // ?? what do the nums mean when you read this code? no idea.

// Objects better to model a record.
const carStats = {
  horsepower: 400,
  weight: 3354,
};
