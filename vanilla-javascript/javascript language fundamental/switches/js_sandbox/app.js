const color = 'yellow';

switch(color){
    case 'red':
      console.log('Color is red');
      break;
    case 'blue':
      console.log('Color is blue');
      break;
    default:
      console.log('Color is not red or blue');
      break;

}

let day;

switch(new Date().getDay()){
    case '0':
      day = 'Sunday';
      break;
    case '1':
      day = 'Monday';
      break;
    case '2':
      day = 'Sunday';
      break;
    case '3':
      day = 'Sunday';
      break;
    case '4':
      day = 'Sunday';
      break;
    case '5':
      day = 'Sunday';
      break;
    case '6':
      day = 'Sunday';
      break;
}

console.log(`Today is ${day}`);