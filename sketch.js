const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  ground2 = new Stand(0,height/2,20,height);
  ground3 = new Stand(width/2,0,width,20);
  ground4 = new Stand(width,height/2,20,height);
  stand1 = new Stand(width-510,300,250,10);
  stand2 = new Stand(width-200,200,200,10);
 
  //level one
  block1 = new Block(width-600,275,30,40);
  console.log(block1);
  block2 = new Block(width-570,275,30,40);
  block3 = new Block(width-540,275,30,40);
  block4 = new Block(width-510,275,30,40);
  block5 = new Block(width-480,275,30,40);
  block6 = new Block(width-450,275,30,40);
  block7 = new Block(width-420,275,30,40);
  //level two
  block8 = new Block(width-570,235,30,40);
  block9 = new Block(width-540,235,30,40);
  block10 = new Block(width-510,235,30,40);
  block11 = new Block(width-480,235,30,40);
  block12 = new Block(width-450,235,30,40);
  //level three
  block13 = new Block(width-540,195,30,40);
  block14 = new Block(width-510,195,30,40);
  block15 = new Block(width-480,195,30,40);
  //top
  block16 = new Block(width-510,155,30,40);

  //level one
  block17 = new Block(width-275,175,30,40);
  block18 = new Block(width-245,175,30,40);
  block19 = new Block(width-217,175,30,40);
  block20 = new Block(width-190,175,30,40);
  block21 = new Block(width-165,175,30,40);
  block22 = new Block(width-130,175,30,40);
  //level two
  block23 = new Block(width-245,135,30,40);
  block24 = new Block(width-217,135,30,40);
  block25 = new Block(width-190,135,30,40);
  block26 = new Block(width-165,135,30,40);
  //level three
  block28 = new Block(width-217,95,30,40);
  block29 = new Block(width-190,95,30,40);
  //top
  block30 = new Block(width-200,65,30,40);
  //polygon
  var options = {
    isStatic : false,
    density : 100,
    friction : 2,
    restitution : 0.2
  }
  polygon = Bodies.polygon(300,200,6,20,options);
  console.log(polygon)
  World.add(world, polygon);
  //slingShot
  sling = new Slingshot(polygon,{x:300, y:200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("red");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill("yellow");
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  fill(13,152,186);
  block28.display();
  block29.display();
  fill("violet");
  block30.display();

  var angle = polygon.angle;
  push();
  translate(polygon.position.x, polygon.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(polygon_img, 0, 0, 50, 50);
  pop();

  sling.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon, {x:300, y:200});
    sling.attach(polygon)
  }
}