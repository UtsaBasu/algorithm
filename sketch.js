var rectangle1 , rectangle2;
var square1 , square2;
var r1, r2;


function setup() {
  createCanvas(800,400);
   square1=createSprite(200, 200, 50, 50);
  square1.shapeColor="yellow";
  square2=createSprite(260, 260, 50, 50);
  square2.shapeColor="yellow";
  r1=createSprite(180,200,20,30);
  r2=createSprite(250,200,20,30);
  r1.velocityX=2;
  r2.velocityX=-2;
  r1.shapeColor="violet";
  r2.shapeColor="violet";
}

function draw() {
  background(255,255,255); 
  square1.x=World.mouseX;
  square1.y=World.mouseY;

  if (istouching(square1,square2)){
    square2.shapeColor="green";
  }
  else{
    square2.shapeColor="yellow"; 
  }
  
  bounceoff(r1,r2);
  drawSprites();
}

