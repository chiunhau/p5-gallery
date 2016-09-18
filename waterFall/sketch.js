var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  blendMode(HARD_LIGHT);
}
function mouseDragged() {
  particles.push(new Particle(mouseX, mouseY, random(1,3)));
}
function mousePressed() {
  particles.push(new Particle(mouseX, mouseY, random(1,3)));
}
function draw() {
  background(360, 100, 100);
  particles.map(function(p) {
    var gravity = createVector(0, 0.1);
    p.applyForce(gravity);
    p.update();
    p.display();
  })
}

function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
  this.fillColor = color(random(360), 100, 60);

  this.applyForce = function(force) {
    var f = force.copy();
    this.acc.add(f.div(this.mass));
  }
  
  this.edges = function() {
    if(this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }
  }
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.edges();
  }
  this.display = function() {
    noStroke();
    fill(this.fillColor);
    ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10);
  }
}