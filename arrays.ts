// Empty needs a type
const carMakersEmpty: string[] = [];
// Inference
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

//array with strings, in an array
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const cari = carMakers[0];
console.log(cari);

const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car;
});

// arrays with multiple values - flexiple types
const nbDate: (Date | string)[] = [new Date(), '2030-10-10'];

// nbDate.push('2030-10-11');
// nbDate.push(new Date());
