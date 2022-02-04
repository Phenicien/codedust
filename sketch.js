function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  if(mouseIsPressed){
    background(0,255,0);
  }
  stroke(255);
  strokeWeight(4);
  fill(200,100,100);
  if(mouseX>250&& mouseX <350&& mouseX){
  fill(25,0,200)
  }
  rectMode(CENTER);
  rect(300,200,100,100)
 fill(25,0,200);
  
   ellipse(200,200,100,100,100);
  
}