var vehicles = [], target, vehiclesCreated = false, isRecording = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(65, 90, 169);
  noStroke();

  target = createVector(0, 0);
}

function draw() {
	target.set(mouseX, mouseY);
  vehicles.map(function(vehicle) {
  	vehicle.run(target);
  });
}

function Vehicle(x, y, m, s) {
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.mass = m;
	this.maxspeed = s;
	this.maxforce = 0.5;
}

Vehicle.prototype.applyForce = function(f) {
	this.acc.add(f);
};

Vehicle.prototype.follow = function(target) {
	var desired = p5.Vector.sub(target, this.pos);

	if(desired.mag() > 50) {
		desired.setMag(this.maxspeed);
	}
	else {
		desired.setMag(map(desired.mag(), 0, 50, 0, this.maxspeed));
	}
	var steer = p5.Vector.sub(desired, this.vel);
	steer.limit(this.maxforce);
	this.applyForce(steer);

};

Vehicle.prototype.udpate = function() {
	this.vel.add(this.acc);
	this.pos.add(this.vel);
	this.acc.mult(0);
};

Vehicle.prototype.render = function() {
	fill(255, 80);
	ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
};

Vehicle.prototype.run = function(target) {
	this.follow(target);
	this.udpate();
	this.render();
};

function mouseDragged() {
	vehicles.push(new Vehicle(mouseX, mouseY, 2, random(2, 7)));
}

function keyPressed() {
	if (isRecording) {
		noLoop();
		isRecording = false;
	}
	else {
		loop();
		isRecording = true;
	}
}
