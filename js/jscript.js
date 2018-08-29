var numSquares = 6;
var colors = generateRandomColor(numSquares);
var bodyColor = 'steelblue';
var h1 = document.getElementsByTagName('h1')[0];
var colorPicked = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var resetButton = document.querySelector('#reset');
colorDisplay.textContent = colorPicked;
var easyButton = document.querySelector('#easyBtn');
var hardButton = document.querySelector('#hardBtn');
var squares = document.querySelectorAll('.squares');
var message = document.getElementById('message');

resetButton.addEventListener('click', function() {
	colors = generateRandomColor(numSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	for ( var i = 0; i < squares.length; i++ ) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = bodyColor;
	message.textContent = '';
	resetButton.textContent = 'New Colors';
});

hardButton.addEventListener('click', function() {
	easyButton.classList.remove('selected');
	hardButton.classList.add('selected');
	numSquares = 6;
	colors = generateRandomColor(numSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	for ( var i = 0; i < squares.length; i++ ) {
			squares[i].style.backgroundColor =  colors[i];
			squares[i].style.display = 'block';
	}

	h1.style.backgroundColor = bodyColor;
	message.textContent = '';
	resetButton.textContent = 'New Colors';
});

easyButton.addEventListener('click', function() {
	easyButton.classList.add('selected');
	hardButton.classList.remove('selected');
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	for ( var i = 0; i < squares.length; i++ ) {
		if ( colors[i] ) {
			squares[i].style.backgroundColor =  colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}

	h1.style.backgroundColor = bodyColor;
	message.textContent = '';
	resetButton.textContent = 'New Colors';
});

for ( var i = 0; i < squares.length; i++ ) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener('click', function() {
		var clicked = this.style.backgroundColor;
		if ( clicked === colorPicked ) {
			colorRight(colorPicked);
			h1.style.backgroundColor = colorPicked;
			resetButton.textContent = 'Play again?';
		} else {
			this.style.backgroundColor = '#212132';
			// this.style.transition = 'all 1s';
			message.textContent = 'try again';
		}
	});
}

function colorRight(color) {
	for ( var a = 0 ; a < squares.length; a++ ) {
		squares[a].style.backgroundColor = colorPicked;
		// squares[a].style.transition = 'all 1s;';
		message.textContent = 'correct';
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num) {
	var arr = [];
	for ( var i = 0; i < num; i++ ) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}