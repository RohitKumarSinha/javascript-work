const firstName = 'Rohit';
const lastName = 'Sinha';
const age = 36;
const str = 'Hello there my name is Rohit';
const tags = 'Web design, Web development, programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append 
val = 'Rohit ';
val += 'Sinha';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping 
val = 'That\'s awesome. I can\'t wait';

// Length 
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('r');
val = firstName.lastIndexOf('h');

// charAt
val = firstName.charAt('3');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 3);

// slice()
val = firstName.slice(0, 3);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Rohit', 'Sinha');

// includes()
val = str.includes('foo');

console.log(val);