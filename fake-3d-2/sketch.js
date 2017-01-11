var vertices = [
	-100, 100, 0,
	0, 100, 0,
	100, 100, 0,
	-100, 0, 0,
	0, 0, 0,
	100, 0, 0,
	-100, -100, 0,
	0, -100, 0,
	100, -100, 0
];

var indices = [
	0, 3, 4,
	0, 4, 1,
	1, 4, 5,
	1, 5, 2,
	3, 6, 7,
	3, 7, 4,
	4, 7, 8,
	4, 8, 5
];

var magicNum = 0.01;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
	noStroke();

	// change all vertices' z
	for (var i = 0; i < vertices.length; i ++) {
		vertices[i][2] = Math.sin(frameCount * 0.05 + i*6) * 60;
	}



	drawTriangles(makeProjection(makePerspective(geometries)));
}

function getMeshVertices(vertices, indices) {
	var
	for (var i = 0; i < indices.length; i += 3) {

	}
}

function makePerspective(indices) {
	var perspectiveGeometries = [];
	for (var i = 0; i < meshes.length; i += 3) {
		perspectiveGeometries.push([
			geometries[i][0] * (1 + geometries[i][2] * magicNum),
			geometries[i][1] * (1 + geometries[i][2] * magicNum),
			geometries[i][2]
		]);
	}

	return perspectiveGeometries
}


function makeProjection(perspectiveGeometries) {
	var projectedGeometries = [];
	for (var i = 0; i < perspectiveGeometries.length; i ++) {
		projectedGeometries.push([
			width / 2 + perspectiveGeometries[i][0],
			height / 2 - perspectiveGeometries[i][1],
			perspectiveGeometries[i][2]
		]);
	}

	return projectedGeometries
}

function drawTriangles(projectedGeometries) {
	for (var i = 0; i < projectedGeometries.length; i += 3) {
		fill(countBrightness(countNormal([
			projectedGeometries[i],
			projectedGeometries[i + 1],
			projectedGeometries[i + 2]
		])));
		triangle(
			projectedGeometries[i][0], projectedGeometries[i][1],
			projectedGeometries[i + 1][0], projectedGeometries[i + 1][1],
			projectedGeometries[i + 2][0], projectedGeometries[i + 2][1]
		);
	}
}

function countNormal(geometry) {
	var v = [geometry[1][0] - geometry[0][0], geometry[1][1] - geometry[0][1], geometry[1][2] - geometry[0][2]];
	var w = [geometry[2][0] - geometry[0][0], geometry[2][1] - geometry[0][1], geometry[2][2] - geometry[0][2]];

	return [
		v[1] * w[2] - v[2] * w[1],
		v[2] * w[0] - v[0] * w[2],
		v[0] * w[1] - v[1] * w[0]
	];
}

function countBrightness(normal) {
	var normalV = createVector(normal[0], normal[1], normal[2]);
	var lightV = createVector(0, 0, -1);
	var b = ((Math.abs(p5.Vector.angleBetween(normalV, lightV) - PI) - HALF_PI) / HALF_PI)  * 255;

	return b //return from 0 to 255
}
