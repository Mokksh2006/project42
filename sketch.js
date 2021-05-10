var hr, mn, sc, scAngle;
function setup() {
  createCanvas(800,400);
  
 
  angleMode(DEGREES);
  
}

function draw() {
  angleMode(DEGREES);
  background(255,255,255);
  translate(width / 2, height / 2); 
  hr = hour();
  mn = minute();
  sc = second(); 
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);
  
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(15);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,0,255);
  strokeWeight(10);
  line(0,0,100,0);
  pop();
  drawSprites();
}