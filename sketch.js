
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var rope

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(300,120,20,20);
	bobObject2 = new Bob(340,120,20,20);
	bobObject3 = new Bob(380,120,20,20);
	bobObject4 = new Bob(420,120,20,20);
	bobObject5 = new Bob(460,120,20,20);

	roof = new Roof(width/2, 150, 1150, 50);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display(); 
  roof.display();

  
  drawSprites();
 
}

function keyPressed() {
	if (keyDown("UP_ARROW")) {
	Matter.Body.applyForce(paperTest.body, paperTest.body.position, {x:-5, y:4});
	}
}




