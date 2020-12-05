
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,dustbin,paper;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin = new Dustbin(650,300,170,150);
	paper = new Paper(100,300,65);
	ground1 = new Ground(400,390,800,30);
}

function draw() {
  background("white");
  
   dustbin.display();
   paper.display();
   ground1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-250})
        
	}
}

