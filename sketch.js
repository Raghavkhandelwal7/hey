
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5,paperObj,roofObj,ropeObj1,ropeObj2,ropeObj3,ropeObj4,ropeObj5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObj=new roof(400,50,500,40);
	bobObj1=new bob(200,300,50,100);
	bobObj2=new bob(300,300,50,200);
	bobObj3=new bob(400,300,50,300);
	bobObj4=new bob(500,300,50,400);
	bobObj5=new bob(600,300,50,500);
  ropeObj1=new rope(bobObj1.body,roofObj.body);
  ropeObj2=new rope(bobObj2.body,roofObj.body);
  ropeObj3=new rope(bobObj3.body,roofObj.body);
  ropeObj4=new rope(bobObj4.body,roofObj.body);
  ropeObj5=new rope(bobObj5.body,roofObj.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roofObj.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  ropeObj1.display();
  ropeObj2.display();
  ropeObj3.display();
  ropeObj4.display();
  ropeObj5.display();
  drawSprites();
 
  if(keyDown(UP_ARROW)){
    bobObj5.velocityX=4;
    bobObj5.velocityY=-2;
  }
}



