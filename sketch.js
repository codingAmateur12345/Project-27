
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var string1, string2, string3, string4, string5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1 = new Bob(510,600,90);
   bob2 = new Bob(420,600,90);
   bob3 = new Bob(330,600,90);
   bob4 = new Bob(240,600,90);
   bob5 = new Bob(150,600,90);

   roof = new Roof(350,250,450,40);

   string1 = new Chain(bob1.body, roof.body, -90*2,0);
   string2 = new Chain(bob2.body, roof.body, -90*2,0);
   string3 = new Chain(bob3.body, roof.body, -90*2,0);
   string4 = new Chain(bob4.body, roof.body, -90*2,0);
   string5 = new Chain(bob5.body, roof.body, -90*2,0);
	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background("black");

string1.display();

string2.display();
 
string3.display();
 
string4.display();
 
string5.display();

roof.display();

bob1.display();

bob2.display();

bob3.display();

bob4.display();

bob5.display();

keyPressed();
  
drawSprites();
 
}


function keyPressed(){
  Matter.Body.setStatic(bob5, false);
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:85,y:1});
 }
}


