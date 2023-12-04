// declare a numSquare variable and assign to six this six help to produce six different types of color 
var numSquares = 6;

// declare a empty color array 
var colors = [];

// declare a variable pickedColor which is used for match RGB and our picked color
var pickedColor;

// declare a square array which is used to grab the all square class in the html file . it is array
var squares = document.querySelectorAll(".square");

// declare a colorDisplay variable which is used to grab  span who is related to RGB color 
var colorDisplay = document.getElementById("colorDisplay");

// declare a messageDisplay variable which is used to grab span which is related to display whether you choose right color or not
var messageDisplay = document.querySelector("#message");

// declare a h1 variable which is used to grab h1 in the grab 
var h1 = document.querySelector("h1");

// declare a resetButton which is used grab reset button in html file
var resetButton = document.querySelector("#reset");

// declare a  modButtons array which is used to grab mode buttons in html file which is easy and hard
var modeButtons = document.querySelectorAll(".mode");

// call init() function 
init();

// define init() function and in init function we call three functions one by one 

function init(){
	setupModeButtons(); // first call this function 
	setupSquares(); // second call this function 
	reset(); // third call this function 
}


// define setupModeButtons function 
function setupModeButtons(){
	// first loop the function two times because modButtons.length give us 2 because in modButton we have easy and hard
	for(var i = 0; i < modeButtons.length; i++){
		//calling to a event listener function which is click function 
		modeButtons[i].addEventListener("click", function(){
			// remove selected button in both class which is generate blue color in button 
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");

			// and add selected class in which we click button 
			this.classList.add("selected");

			// if selected button is easy then we assign three to numsquares otherwise 6
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

			// and calling the reset function which is used to reset the page 
			reset();
		});                                            
	}
}
                                                        
function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}



function reset(){
	// call generateRandom Colors function and pass the argument that how many color i want and assign to array color
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	// pick a random  number
	var random = Math.floor(Math.random() * colors.length);
	// and return as a colors index
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

