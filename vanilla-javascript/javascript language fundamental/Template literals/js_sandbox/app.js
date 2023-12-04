const name = 'Rohit';
const age = 21;
const job = 'Web Developer';
const city = 'patna';
let html;

// without template strings (es5)

html = '<ul><li>Name: ' + name + '</li><li>' + age + ' </li><li>job: ' + job + ' </li><li>City: ' + city + '</li></ul>';


html = '<ul>' + 
       '<li> Name: ' + name + '</li>' + 
       '<li> Age: ' + age + '</li>' + 
       '<li> job: ' + job + '</li>' +
       '<li> city: ' + city + '</li>' +
       '</ul>'; 

function hello(){
    return 'hello';
}

// with template strings (Es6)
html = `
    <ul>
    <li> Name: ${name} </li>
    <li> Age: ${age} </li>
    <li> job: ${job} </li>
    <li> city: ${city} </li>
    <li> ${2 + 2} </li>
    <li> ${hello()} </li>
    <li> ${age > 30 ? 'Over 30' : 'Under 30'} </li>
    </ul>
`;


document.body.innerHTML = html;
