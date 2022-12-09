
let myFav;


function preload(){
myFav = loadImage("IMG_2038.JPG");


}


function setup() {
  createCanvas(windowWidth,windowHeight);

  
 }

function draw() {
  background(255,0,255);
  image(myFav,0,0,9000,windowHeight);



}