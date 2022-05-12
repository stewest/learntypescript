const add = (a, b) => {};

const add1 = (a: number, b: number) => {};

// input then: if return is specified must return something.
// const add2 = (a: number, b: number): number => {};

// input then: return with output
const add3 = (a: number, b: number): number => {
  // Typescript does care about logic, just about type... i.e. in this case number.
  return a + b;
};

// here type inference will know return must be a number but may not be safe, if your logic doesn't actually return a value. Inference doesn't work here for error of forgetting to add a return.
const adder = (a: number, b: number) => {
  return a + b;
};

// anon and named functions
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // can return null or undefined but may never.
};

// function will never return ever - but very strange case
const throwError = (message: string): never => {
  throw new Error(message);
};

// normally
const throwErrors = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015 destructuring
const logWeatherES2015 = ({ date, weather }): void => {
  console.log(date);
  console.log(weather);
};

const logWeatherDestructringTS = ({
  // This is the destructuring
  date,
  weather,
}: {
  // Annotations
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
