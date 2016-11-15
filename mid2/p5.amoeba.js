p5.prototype.amoeba = function(x, y, ctrl, vertices) {
  var segments = [];
  for(var i = 0; i < vertices.length; i += 2) {
    segments.push(new p5.Vector(vertices[i] - x, vertices[i + 1] - y));
  }
  segments.push(new p5.Vector(vertices[0] - x, vertices[1] - y));
  push();
  translate(x, y);
  beginShape();
  vertex(segments[0].x, segments[0].y);

  for(var i = 0; i < segments.length - 1; i ++) {
    var firstAngle =  segments[i].heading();
    var secondAngle = segments[i + 1].heading();
  
    bezierVertex(
      segments[i].x + ctrl * Math.sin(firstAngle),
      segments[i].y - ctrl * Math.cos(firstAngle),
      segments[i + 1].x - ctrl * Math.sin(secondAngle),
      segments[i + 1].y + ctrl * Math.cos(secondAngle),
      segments[i + 1].x,
      segments[i + 1].y
    );
  }

  endShape();
  pop();
};