const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1,ground1,stone1,boy,mango1,mango2;
function preload(){

  boy=loadImage("boy.png");
  tree1=loadImage("tree.png")}

function setup() {
	createCanvas(800, 700);
	//createSprite(110,330,20,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
//	tree1=new Tree(600,300);
	ground1=new Ground(400,650,800,20)
	stone1=new Stone (100,330,30);

  launcherObject= new launcher(stone1.body,{x:110,y:330})

	mango1=new Mango(500,300,30);
	mango2=new Mango(480,260,30);
	mango3=new Mango(530,240,30);
	mango4=new Mango(560,260,30);
	mango5=new Mango(550,200,30);
	mango6=new Mango(590,230,30);
	mango7=new Mango(610,180,30);
	mango8=new Mango(640,210,30);
	mango9=new Mango(660,230,30);
	mango10=new Mango(610,270,30);
	mango11=new Mango(660,280,30);
	mango12=new Mango(710,270,30);

	
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  //tree1.display();
  stone1.display();
  image(boy,75,250,200,300);
  image(tree1,450,150,300,300);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  launcherObject.display();
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
  detectollision(stone1,mango10);
  detectollision(stone1,mango11);
  detectollision(stone1,mango12);
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
     distance=int(dist(stone1.x,stone1.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:110, y:330}) 
	  launcherObject.attach(stone1.body);
	}
  }

  function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }