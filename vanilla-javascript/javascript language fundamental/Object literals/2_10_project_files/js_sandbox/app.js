const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val 

val = person;

// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();


console.log(val);

const people = [
  {name: 'Rohit', age: 21},
  {name: 'Ritik', age: 20},
  {name: 'Riya', age: 20}

];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}