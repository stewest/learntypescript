class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  private honk(): void {
    // Private can only be called by methods in this class
    console.log('beep');
  }

  startDriving(): void {
    this.honk();
  }

  protected bumper(): void {
    // Protected can be used within an child class
    console.log('bump');
  }

  // color: string; // this is a field being declared but has no value.
  // color: string = 'red'; << use this OR use contructor (better), so then...

  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {
    // This is shorthand for the above
    this.color = color;
  }
}

// We create an instance of a class
const vehicle = new Vehicle('blue');
vehicle.drive();
// vehicle.honk(); // Now this doesn't work, as drive here is private, and can only be used within Car

// If Car also has Vehicle attribs and methods
class Car extends Vehicle {
  // if you want to redfine drive
  drive(): void {
    console.log('broom broom');
  }

  // Typescript will inherit the constructor from parent, unless you override
  constructor(public wheels: number, color: string) {
    super(color); // must call constructor from parent(needs color)
  }

  startDriving(): void {
    this.drive();
    this.bumper(); // can access protected func here from super
  }
}

const car = new Car(4, 'red');
car.drive();
console.log(car.color);

// can't access bumper() outside child class
const beetle = new Vehicle('purple');
// beetle.bumper(); won;t work as bumper() is protected

// Fields in classes

// Let's use arguments with classes - with a constructor in the class
const porshe = new Car(4, 'red');
console.log(porshe.color);
console.log(porshe.wheels);

//Interfaces + Classes = really strong code reuse in TS.
