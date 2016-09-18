var vehicles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);		
}

function draw() {
	background(51);
	var target = createVector(mouseX, mouseY);

	vehicles.map(function(v) {
		v.arrive(target);
		v.update();
		v.display();
	});
}

function mouseDragged() {
	vehicles.push(new Vehicle(mouseX, mouseY, random(2,7)));
}

function Vehicle(x, y, m) {
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.mass = m;
	this.maxspeed = 30 / this.mass;
	this.maxforce = 1;
}

Vehicle.prototype.applyForce = function(force) {
	var f = force.copy();
	this.acc.add(f.div(this.mass));
}

Vehicle.prototype.update = function() {
	this.vel.add(this.acc);
	this.vel.limit(this.maxspeed);
	this.pos.add(this.vel);
	this.acc.set(0, 0);
};

Vehicle.prototype.display = function() {
	noStroke();
	fill(255);
	ellipse(this.pos.x, this.pos.y, this.mass * 5, this.mass * 5);
};

Vehicle.prototype.arrive = function(target) {
	var desired = p5.Vector.sub(target, this.pos);

	var d = desired.mag();

	if (d < 100) {
		var m = map(d, 0, 100, 0, this.maxspeed);
		desired.setMag(m);
	}
	else {
		desired.setMag(this.maxspeed)
	}
	var steering = p5.Vector.sub(desired, this.vel);
	steering.limit(this.maxforce);
	this.applyForce(steering);
};