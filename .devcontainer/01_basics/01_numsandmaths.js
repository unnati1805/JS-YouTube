const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // fixed the decimal values

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // round off to places

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++ Maths ++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));    // round off to largest value
// console.log(Math.floor(4.6));   // round off to smallest value
// console.log(Math.pow(4,3));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // values between 0 and 1
console.log((Math.random()*10) + 1); // for the case of having values greater than 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);