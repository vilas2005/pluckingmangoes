const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var tree,stone,ground,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var constraint;
var gameState;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	tree=new Tree(650,450,0,0);
	stone=new Stone(238,540,25);
	ground=new Ground(400,700,800,50);
	boy=new Boy(300,600,0,0);
	mango1=new Mango(581,365,30);
	mango2=new Mango(590,401,30);
	mango3=new Mango(680,386,30);
	mango4=new Mango(650,326,30);
	mango5=new Mango(720,356,30);
	mango6=new Mango(710,256,30);
	mango7=new Mango(650,266,30);
	mango8=new Mango(730,280,30);
	mango9=new Mango(770,356,30);
	mango10=new Mango(620,256,30);
	mango11=new Mango(530,386,30);

	gameState=0;

	constraint=new Launcher(stone.body,{x:238,y:540});
	World.add(world,constraint)

	Engine.run(engine);
}


function draw() {


  background(255);
  
  textSize(30);
  text("Press space to retry",200,350);

  tree.display();
  stone.display();
  ground.display();
  boy.display();
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

  collision(stone,mango1);
  collision(stone,mango2);
  collision(stone,mango3);
  collision(stone,mango4);
  collision(stone,mango5);
  collision(stone,mango6);
  collision(stone,mango7);
  collision(stone,mango8);
  collision(stone,mango9);
  collision(stone,mango10);
  collision(stone,mango11);

  drawSprites();
  keyPressed();

  if(constraint.chain.bodyA!=null){
	constraint.display();
	}
}

function mouseDragged(){
		if(gameState===0){
		 Body.setPosition(stone.body,{x:mouseX,y:mouseY});
		 constraint.chain.stiffness=0.004;
		}
}

function mouseReleased(){
	constraint.chain.bodyA=null;
	gameState=1;
}

function keyPressed(){
	if(keyCode===32){
		constraint.attach(stone.body)
		Body.setPosition(stone.body,{x:238,y:540});
		gameState=0;
		keyCode=null;
	}
}
function collision(objectA,objectB){

	if (objectA.body.position.x - objectB.body.position.x <= objectA.radius + objectB.radius
		&& objectB.body.position.x - objectA.body.position.x <= objectB.radius + objectA.radius
		&&objectA.body.position.y - objectB.body.position.y <= objectA.radius + objectB.radius
		&& objectB.body.position.y - objectA.body.position.y <= objectB.radius + objectA.radius) {
		 Body.setStatic(objectB.body,false);
	}
}