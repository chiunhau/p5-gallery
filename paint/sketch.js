var pink, blue, eraser;
var currentColor = 0;
var colors = []

function setup() {
	createCanvas(windowWidth, windowHeight);

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
	if (currentColor !== 2) {
		paint(mouseX, mouseY);
	}
	else {
		erase(mouseX, mouseY);
	}
}

function mouseDragged() {
	if (currentColor !== 2) {
		paint(mouseX, mouseY);
	}
	else {
		erase(mouseX, mouseY);
	}
}


function paint(centerX, centerY) {
	for(var i = 0; i < 2000; i ++) {
		noStroke();
		// fill(lerpColor(pink, blue, 0.5));
		// fill(lerpColor(pink, blue, (Math.sin(frameCount * 0.05) + 1) * 0.5));
		fill(colors[currentColor]);
		ellipse(centerX + randomGaussian(40, 40) -40  , centerY + randomGaussian(40, 40) - 40 , 1, 1);
	}
}

function erase(centerX, centerY) {
	noStroke();
	fill(colors[currentColor]);
	ellipse(centerX, centerY, 200, 200);
}
