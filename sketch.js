function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  stroke(255);
  strokeWeight(4)
  noFill();
  
  if (mouseX < 300){
    fill(255,100,100);
  }
  ellipse(200,200,100,100);
}