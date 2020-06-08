var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor=color(250,0,0);
  wall=createSprite(1200, 200,60, height/2);
  wall.shapeColor=color("white");
  //weight=createSprite()

  speed=random(55,90)
  weight=random(400,1500)

  car.velocityX=speed;

}

function draw() {
  background(0); 
  
  //wall.shapeColor="white";

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
  var deformation=(0.5*speed*speed*weight)/22500;

  if(deformation<100){
    car.shapeColor="green";
    //car.velocityX=0;
  }
  if(deformation<180 && deformation>100){
    car.shapeColor="yellow";
    //car.velocityX=0;
  }
  if(deformation>180){
    car.shapeColor="red";
    //car.velocityX=0;
  }
}
  //car.display();
  //wall.display();
  drawSprites();
}