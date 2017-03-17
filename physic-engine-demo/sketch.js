var particles = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSL, 100);
}

function draw() {
	for (var i = 0; i < particles.length; i ++) {
		particles[i].applyForce(createVector(0, 0.3));
		particles[i].render();
	}
}

function mouseDragged() {
	particles.push(new Particle(mouseX, mouseY));
}

function Particle(x, y) {
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.magic = Math.random();

	this.applyForce = function(f) {
		this.acc.add(f);
	}

	this.update = function() {
		this.vel.add(this.acc);
		this.vel.limit(7);
		this.pos.add(this.vel);

		this.acc.set(0, 0);
	}

	this.render = function() {
		this.update();
		fill(255);
		ellipse(this.pos.x, this.pos.y, map(Math.sin(frameCount * 0.1), -1, 1, 10, 100));
	}
}
