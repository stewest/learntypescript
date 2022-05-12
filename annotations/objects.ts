const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  // es2015 method declaration with ts annotation
  setAge(age: number): void {
    this.age = age;
  },
};

const ageNormal = profile.age;

// Destuctured version, have to write out strcuture of profile.age = object
//const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

// more items example. can ignore "'name' was also declared here."
const { age, name }: { age: number; name: string } = profile;
