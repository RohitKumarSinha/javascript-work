// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World');

//     e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onclick);

function onclick(e){
    // console.log('Clicked');

    let val;
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // Event type
    val = e.type;

    // TimeStamp
    val = e.timeStamp;

    // coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    e.preventDefault();
    
    console.log(val);
}
