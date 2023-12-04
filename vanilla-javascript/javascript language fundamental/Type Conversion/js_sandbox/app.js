let val;

// Number to String
val = String(333);
val = String(4 + 4);
// Bool to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = (true).toString();

// string to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3]);

val = parseInt('100.30');
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// Only used by String
// console.log(val.length);
// only used by Number
// console.log(val.toFixed());

const val1 = String(5);
const val2 = 6;

const sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);