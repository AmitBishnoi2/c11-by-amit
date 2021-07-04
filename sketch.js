var ship,movingship;
var seaimage,sea,edges;
function preload(){
movingship=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaimage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  edges = createEdgeSprites();
   ship = createSprite(50,160,20,50);
ship.addAnimation("skipping",movingship);
sea= createSprite(200,180,400,20)
sea.addImage("running",seaimage)
if(sea.x<0){
  sea.x=sea.width/2;
}

}

function draw() {
 drawSprites();
 sea.velocityX=-6; 
 background("blue");
 
}