
function setup() {
  createCanvas(windowWidth,windowHeight); 
  
 }
function draw() {
  background(13,5,45); 
stroke(random(255),random(255),random(255));

let starcounter=0;
while(starcounter<100){
moulistarx(noise(1,starcounter)*width,noise(2,starcounter)*height,noise(3,starcounter)*50,noise(4,starcounter)*50);

starcounter ++;
}
function moulistarx(x,y,w,h){
push();
  translate(x,y);
  if(frameCount%5==0){
    line(-w/2,0,w/2,0);
  }else{
    line(0,h/2,0,-h/2);
  }pop();}




}
