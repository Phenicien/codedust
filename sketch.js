let circleX = 100
function setup() {
  createCanvas(400, 400);
  circleX = 200;
}
function mousePressed(){
  circleX = 0;
}

function draw() {
  background(0 ,0);
  noStroke();
  fill(255);
  circle(circleX, 150,64);
  circleX = circleX+5;
}