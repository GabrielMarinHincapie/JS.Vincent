function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
 }

function draw() {

background(0);
translate(width/2,height/2);

fill(255);
circle(0,0,1200);
fill(0);
circle(0,0,1197);
fill(255);
circle(0,0,1000);
fill(0);
circle(0,0,997);
fill(255);
circle(0,0,800);
fill(0);
circle(0,0,797);
fill(255);
circle(0,0,600);
fill(0);
circle(0,0,597);
fill(255);
circle(0,0,400);
fill(0);
circle(0,0,397);




fill(color("yellow"));
circle(0,0,200);
noStroke();
fill(color("orange"));
circle(0,0,150);
noStroke();
fill(color("yellow"));
circle(0,0,100);
noStroke();
fill(color("orange"));
circle(0,0,50);
fill(0);
text("SOLEIL",0,0);
textSize(50)
textAlign(CENTER,CENTER);

push();
rotate(millis()/1000);
translate(300,0);
fill(color("green"));
circle(0,0,100,);
fill(color("blue"));
rect(0,0,60,60)
fill(0);
text("terre",0,0);
textSize(4)
textAlign(CENTER,CENTER)
pop();

push();
rotate(millis()/1500);
translate(200,0);
fill(0256,256,40);
circle(0,0,50,);
fill(0,0,0);
rect(0,0,20,20);
pop();

push();
rotate(millis()/2000);
translate(400,0);
rotate(millis()/9000);
fill(200,0,256);
circle(0,0,30,);
fill(color("black"));
rect(0,0,10,10);
pop();

push();
rotate(millis()/3000);
translate(500,0);
fill(color("purple"));
circle(0,0,40);
pop();

push();
rotate(millis()/4000);
translate(600,0);
fill(color("lightblue"));
circle(0,0,100);







}