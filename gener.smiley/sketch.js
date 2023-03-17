function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);

 }

function draw() {
  
translate(mouseX,mouseY);
  fill(255,255,0);
  ellipse(0,0,90,90);

  fill(0);
  ellipse(-15,-5,10,33);
  ellipse(15,-5,10,33);
  ellipse(0,26,50,20);

  noStroke();
  fill(255,255,0);
  ellipse(0,20,60,20);

}