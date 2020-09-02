var bullet, wall;
var speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83);
  bullet=createSprite(500, 200, 10, 10);
  bullet.velocityX = speed;
  wall=createSprite(1200,200, 60, height/2);
  wall.width = thickness;
  wall.shapecolor = color (80,80,80);
}

function draw() {
  background(0);  
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      bullet.shapecolor = color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapecolor=color(230,230,0);
     }
    if(deformation<100){
      bullet.shapecolor = color(0,255,0);
    }

  }
  drawSprites();
}