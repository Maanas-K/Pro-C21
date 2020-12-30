
//function that return a value

var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX=-0.5;

  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //movingRect.velocityX=5;

}

function draw() {
  background(0,0,0);  
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;*/

  


 //function call
 if(Touch(movingRect,fixedRect)) //input parameters
 {


fixedRect.shapeColor="red";
movingRect.shapeColor="red";

 }
 else
 {
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";


 }
  

//BounceOff(movingRect, fixedRect);
Collide(movingRect,fixedRect);

vel(movingRect,6,0);
vel(fixedRect,-3,0);

  drawSprites();
}


