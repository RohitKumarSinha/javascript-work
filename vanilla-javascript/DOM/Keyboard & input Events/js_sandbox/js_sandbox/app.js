const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// keydown
// taskInput.addEventListener('keydown', runEvent);

// focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// // cut
// taskInput.addEventListener('cut', runEvent);

// // paste
// taskInput.addEventListener('paste', runEvent);

// // Input
taskInput.addEventListener('input', runEvent);

// change
// select.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`Event Type: ${e.type}`);

    // console.log(e.target.value);
    // heading.innerText = e.target.value;

    // // get input value
    // console.log(taskInput.value);
    e.preventDefault();
}