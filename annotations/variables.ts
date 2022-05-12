let apples: number = 5;
let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothingThere: undefined = undefined;

// Build in Objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];

// Classes
class Car {}

let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Annotatig a variable declaration (for its arg input and type of value it'll return)
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1. Function that returns any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

let sum = coordinates.x * coordinates.y;
console.log('sum:', sum);

// 2 When we declare a var on one line but only initializr it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // or let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true; // only initialized here, so would be "any when inferred".
  }
}

// 3. Var whose type cannot be inferred. Bad code but might be a scenario like this.
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > 0) {
    numberAboveZero = numbers[index];
  }
  console.log(numberAboveZero);
}

// FUNCTIONS
// Annotations for functions: what type of
const logsNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
