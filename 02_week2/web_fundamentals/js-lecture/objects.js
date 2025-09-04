// What is an object?

// An object has properties and methods.
// "state" and "behavior"

const guitar = {
  brand: 'Fender',
  model: 'Telecaster',
  color: 'Blonde',
  strum: function () {
    console.log(`strumming the ${this.brand} ${this.model}`);
  },
};

console.log(guitar);

console.log(guitar.model);
console.log(guitar['model']);

guitar.color = 'red';
console.log(guitar.color);

guitar.model = 'Stratocaster';
console.log(guitar.model);

guitar.strum();
guitar['strum']();

console.log(this);
