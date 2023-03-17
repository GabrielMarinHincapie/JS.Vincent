let flocons = [];
let SNspeed = 1; 





function setup() {
  createCanvas(windowWidth,windowHeight);
  for( let cmpt = 0; cmpt<100 ; cmpt++){
    flocons.push(new flake());

  }


 }

function draw() {
  background(244,10,56);

  translate(mouseX,mouseY)
  fill(255);
  circle(0,-50,100,100);



  fill(255);
  text("merry christmas",-180,40);
  textSize(50);



push();
  for( let cmpt = 0; cmpt < 100 ; cmpt ++){
    flocons[cmpt].display();}

  
pop();
  
  }
class flake {

  constructor(){
    this.posX = mouseX;
    this.posY = 0;
  }


  display(){
    noStroke();
    fill(256);
    ellipse( this.posX,this.posY,10,10);
    this.posY = this.posY + SNspeed;


    if(this.posY==200){
      this.posY=0;
    }


  }  }