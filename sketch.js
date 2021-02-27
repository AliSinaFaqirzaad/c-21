var fixedRect, movingRect;
var man ,women;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  man = createSprite(200,200,60,60);
  man.shapeColor = "blue";
  
  women = createSprite(400,400,60,60);
  women.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,man)){
    //when they  touch each other they will turn purple
    movingRect.shapeColor = "purple"
    man.shapeColor = "purple";
  }
  else{
    //if they don't touch their color won't change
    movingRect.shapeColor = "green"
    man.shapeColor = "blue";
  }

  
  
  drawSprites();
}

