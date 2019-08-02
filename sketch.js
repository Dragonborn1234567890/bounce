function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 300,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
 movingRect.velocityY = -5;
 fixedRect.velocityY = 5;
}
  

function draw() {
  background(255,255,255); 
  /*movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(checkBounce(movingRect,fixedRect)){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
    movingRect.velocityY  = 5;
    fixedRect.velocityY = -5;
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
    movingRect.velocityY = -5;
 fixedRect.velocityY = 5;
  }*/
  checkBounce(movingRect,fixedRect);
  drawSprites();
}
