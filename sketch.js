let x,y,r,g,b;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0)
}

function draw() {
  
  r = random(0,255);
  g = 0;
  b = random(0,300);
  x = random(0,600);
  y = random(0,400);
  // noStroke();
  fill(r,g,b,2000);
  circle(x,y,100);
  ellipse(x,y,100);
  square(x,y,100);
  triangle(x,y,b,100,200,300);
  
}

