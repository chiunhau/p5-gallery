var xoff = 0, xoff1 = 0, xoff2 = 0, vertices1, vertices2;
var bacons = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	curveTightness(-0.1);
	bacons.push(new Bacon(0, 120, 240, 360, 480));
}

function draw() {
	background('#ffef00');

	fill(255, 0, 0);
	rect(0, 0, width / 2, height);
	translate(width / 4, height / 2);

	egg();

	translate(width / 3, - 200);

	for (var i = 0; i < bacons.length; i ++) {
		bacons[i].update();
		bacons[i].render();
	}

}

function mouseClicked() {
	if (mouseX > width / 2) {
		bacons.push(new Bacon(0, 120, 240, 360, 480))
	}
}

function egg() {
	fill(255);
	vertices1 = [];
	for(i = 0; i < 8; i ++) {
		var angle = 2 * PI * (i / 8);
		var r = map(noise(xoff1 + 100 * i), 0, 1, 100, 270);
		vertices1.push(r * cos(angle), -r * sin(angle));
		xoff1 += (mouseX <= width / 2 ? 0.01 : 0.0002);
	}
	amoeba(0, 0, 50, vertices1);

	fill('#ffef00');
	vertices2 = [];
	for(i = 0; i < 6; i ++) {
		var angle = 2 * PI * (i / 6);
		var r = map(noise(xoff2 + 150 * i), 0, 1, 50, 100);
		vertices2.push(r * cos(angle), - r * sin(angle));
		xoff2 += (mouseX <= width / 2 ? 0.01 : 0.0002);
	}
	amoeba(0, 0, 28, vertices2);
}

function Bacon(x1, x2, x3, x4, x5) {
	this.x = [x1, x2, x3, x4, x5];
	this.y = [];
	this.randomYOffset = [
		random(10),
		random(10),
		random(10),
		random(10)
	];
	this.update = function() {
		this.y = [
			noise(xoff) * 250,
			noise(xoff + this.randomYOffset[0]) * 250,
			noise(xoff + this.randomYOffset[1]) * 250,
			noise(xoff + this.randomYOffset[2]) * 250,
			noise(xoff + this.randomYOffset[3]) * 250
		];

		xoff += (mouseX > width / 2 ? 0.06 : 0.001);
	};

	this.renderStrip = function(stripWidth) {
		noStroke();
		beginShape();
		curveVertex(this.x[0], this.y[0]);
		curveVertex(this.x[0], this.y[0]);
		curveVertex(this.x[1], this.y[1]);
		curveVertex(this.x[2], this.y[2]);
		curveVertex(this.x[3], this.y[3]);
		curveVertex(this.x[4], this.y[4]);
		curveVertex(this.x[4], this.y[4]);
		curveVertex(this.x[4], this.y[4]);
		curveVertex(this.x[4], this.y[4] + stripWidth);
		curveVertex(this.x[4], this.y[4] + stripWidth);
		curveVertex(this.x[4], this.y[4] + stripWidth);
		curveVertex(this.x[3], this.y[3] + stripWidth);
		curveVertex(this.x[2], this.y[2] + stripWidth);
		curveVertex(this.x[1], this.y[1] + stripWidth);
		curveVertex(this.x[0], this.y[0] + stripWidth);
		curveVertex(this.x[0], this.y[0] + stripWidth);
		endShape();
	};

	this.render = function() {
		fill(255);
		this.renderStrip(120);

		fill('#ff3429');
		this.renderStrip(30);
		translate(0, 60);
		this.renderStrip(20);
		translate(0, 25);
		this.renderStrip(15);
		translate(0, 25);
		this.renderStrip(40);
	}
}
