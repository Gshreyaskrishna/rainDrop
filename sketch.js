


function setup() {
  createCanvas(1200,600);
  
}

function draw() {
  background(0); 
  

  rainRed();
  rainBlue();
  rainGreen();
  rainYellow();
  rainVilot();

  drawSprites();
}

function rainRed(){
  if(World.frameCount % 40 === 0){
    var drop = createSprite(random(20, 120 * 2), 10, 2, 30);
    drop.shapeColor = "red";
    drop.velocityY = 2;
    drop.lifetime = 300;

  }

}

function rainBlue(){
  if(World.frameCount % 40 === 0){
    var drop2 = createSprite(random(20, 240 * 2), 10, 2, 30);
    drop2.shapeColor = "blue";
    drop2.velocityY = 5;
    drop2.lifetime = 120;
  }

}

function rainGreen(){
  if(World.frameCount % 40 === 0){
    var drop3 = createSprite(random(20, 360 * 2), 10, 2, 30);
    drop3.shapeColor = "green";
    drop3.velocityY = 4;
    drop3.lifetime = 150;
  }

}

function rainYellow(){
  if(World.frameCount % 40 === 0){
    var drop4 = createSprite(random(20, 480 * 2), 10, 2, 30);
    drop4.shapeColor = "yellow";
    drop4.velocityY = 1;
    drop4.lifetime = 600;
  }

}

function rainVilot(){
  if(World.frameCount % 40 === 0){
    var drop5 = createSprite(random(20, 600 * 2), 10, 2, 30);
    drop5.shapeColor = "purple";
    drop5.velocityY = 3;
    drop5.lifetime = 200;
  }

}


