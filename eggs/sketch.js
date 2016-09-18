var xoff1 = 0,xoff2 = 0, vertices1, vertices2;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	frameRate(40);
}

function draw() {
	translate(width / 2, height / 2);
	background(255, 60, 60);
	
	fill(255);
	vertices1 = [];
	for(i = 0; i < 8; i ++) {
		var angle = 2 * PI * (i / 8);
		var r = map(noise(xoff1 + 100 * i), 0, 1, 100, 270);
		vertices1.push(r * cos(angle), - r * sin(angle));
		xoff1 += 0.0009;
	}
	amoeba(0, 0, 50, vertices1);


	fill('#ffef00');
	vertices2 = [];
	for(i = 0; i < 6; i ++) {
		var angle = 2 * PI * (i / 6);
		var r = map(noise(xoff2 + 150 * i), 0, 1, 50, 100);
		vertices2.push(r * cos(angle), - r * sin(angle));
		xoff2 += 0.001;
	}
	amoeba(0, 0, 28, vertices2);
}