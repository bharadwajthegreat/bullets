var bullet,wall;
var speed, weight,thickness; 

function setup() {
  createCanvas(1600, 400);

    speed=random(223,321)
    weight=random(30,52)
    thickness=random(22,83)

    bullet=createSprite(50, 200, 50,5);   
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);

    wall=createSprite(1200,200,thickness, height/2);
    wall.shapeColor=color(230,230,230);
}

function draw() {
  background(0);
 if(hascolided(bullet,wall))
 
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/(thickness*thickness*thickness);
    if(deformation>10)
    {
        wall.shapeColor=color("blue");
    }

    if(deformation<10 )
    {
        wall.shapeColor=color("red");
    }

  
  }  
  
  drawSprites();
 
}
function hascolided(bullet1,wall1){
  bulletrightEdge=bullet1.x+bullet1.width;
  wallleftEdge=wall1.x;
  if(bulletrightEdge>=wallleftEdge){
    return true;
  }
  return false;
}