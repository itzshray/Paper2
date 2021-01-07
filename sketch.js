
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1

function preload() {
  binIMG=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);

//make background white change y of bin and size 



	engine = Engine.create();
	world = engine.world;

    paper1 = new Paper(100,295,50);
    World.add(world,paper1)
  

	Rbody=Bodies.rectangle(700,250,20,100,{isStatic:true} );
	World.add(world,Rbody)
	
	Mbody=Bodies.rectangle(600,295,160,10,{isStatic:true} );
	//Matter.Body.setAngle(Mbody,180);
	World.add(world,Mbody)
 Lbody=Bodies.rectangle(600,250,20,100,{isStatic:true} );
 World.add(world,Lbody)
	//Create a Ground

	 ground=Bodies.rectangle(400,300,800,10, {isStatic:true}) ;
      World.add(world, ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites();
  fill("red");
  image(binIMG,Mbody.position.x,Mbody.position.y-140,150,150)
  rect(ground.position.x,ground.position.y,800,10);
  paper1.display();
}
function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-122})
  }
}