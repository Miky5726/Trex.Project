
var trex ,trex_running;
function preload(){
  // For Preloading the Sprite
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimg = loadImage("ground2.png")

}

function setup(){
  //To create a Background, Boundary.
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50)
                  // x,y,width, height
 trex.addAnimation("running",trex_running)
 trex.scale = 0.5
 ground = createSprite(200,180,800,20)
 ground.addImage("grndimg",groundimg)
 ground.velocityX = -3
 invisible_ground = createSprite(200,190,800,10)
 invisible_ground.visible = false
}

function draw(){
  background("black")
  if (keyDown("space")&&(trex.y >= 100)){
    trex.velocityY= -10
  }
  console.log(trex.y)
  trex.velocityY=trex.velocityY+0.5
  if (ground.x < 0){
    ground.x = ground.width/2
  }
  trex.collide(invisible_ground)
  
  drawSprites()
}
