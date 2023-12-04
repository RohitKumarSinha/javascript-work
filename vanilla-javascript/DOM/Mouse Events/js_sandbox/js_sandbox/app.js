const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click
// clearBtn.addEventListener('click', runEvent);

// DoubleClick
// clearBtn.addEventListener('dblclick', runEvent);

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// // Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// mouseenter
// card.addEventListener('mouseenter', runEvent);

// // mouseleave
// card.addEventListener('mouseleave', runEvent);

// // mouseOver
// card.addEventListener('mouseover', runEvent);

// // mouseout
// card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}