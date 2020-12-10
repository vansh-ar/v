var option
	

var ground,bot,lsid,rsid
var groundsprite,bots,lsids,rsids
 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{ 
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bot=createSprite(400,660,200,20 )
	bot.shapeColor=color(230)

	lsid=createSprite(490,620,20,100)
	lsid.shapeColor=color(230)

	rsid=createSprite(310,620,20,100)
	rsid.shapeColor=color(230)

	engine = Engine.create();
	world = engine.world;

	option=createSprite(240,645,30,30)
	option.shapeColor=color(230)
	//Create the Bodies Here.
    bots = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, bot);
	 
	 lsids = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, lsid);
	 
	 rsids = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, rsid);

	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function Keypressed() {
 if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(option.body,option.body.posistion,{x:85,y:-85})
 }
}


