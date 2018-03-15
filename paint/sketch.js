var pink, blue, eraser;
var currentColor = 0;
var colors = []

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('canvas-wrapper');

	colors = [color('#00f'), color('#e4007f'), color('#e9ebee')]
	document.getElementById('blue').addEventListener('click', function() {
		currentColor = 0;
	});

	document.getElementById('pink').addEventListener('click', function() {
		currentColor = 1;
	})

	document.getElementById('eraser').addEventListener('click', function() {
		currentColor = 2;
	})
}

function draw() {
}

function mousePressed() {
	if (mouseX > 50 && mouseY > 0) {
		paint(mouseX, mouseY);
		// if (currentColor !== 2) {
		// 	paint(mouseX, mouseY);
		// }
		// else {
		// 	erase(mouseX, mouseY);
		// }
	}
}

function mouseDragged() {
	if (mouseX > 50 && mouseY > 0) {
		// if (currentColor !== 2) {
			paint(mouseX, mouseY);
		// }
		// else {
		// 	erase(mouseX, mouseY);
		// }
	}

}


function paint(centerX, centerY) {
	for(var i = 0; i < 1000; i ++) {
		noStroke();
		fill(colors[currentColor]);
		ellipse(centerX + randomGaussian(0, 35)  , centerY + randomGaussian(0, 35) , 1, 1);
	}
}

// function erase(centerX, centerY) {
// 	noStroke();
// 	fill(colors[currentColor]);
// 	ellipse(centerX, centerY, 200, 200);
// }
