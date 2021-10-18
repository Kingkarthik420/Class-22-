const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var ground;
var body;



function preload() {
 backgroundImg = loadImage("assets/background.gif")
 towerImg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var karthik={
    isStatic: true
  }
  //ground = createSprite(x,y,w,h)
  rectMode(CENTER)
ground = Bodies.rectangle(600,590,1200,10,karthik);
World.add(world,ground);

var options={
isStatic:true
}
tower = Bodies.rectangle(130,360,100,300,options)
World.add(world,tower);

box=new Cannon(20,50,35,25)

}

function draw() {
  background("lightgray");
  image(backgroundImg, 0,0,1200,600)
  //image(towerImg,130,360)
  Engine.update(engine);
    box.show();
   rect(ground.position.x,ground.position.y,1200,10);
   push();
   imageMode(CENTER)
   image(towerImg, tower.position.x,tower.position.y,100,300)
   pop();
}







