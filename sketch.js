const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron; 
var rubber; 
var stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
   iron = new Iron(250,300,width,height);
   rubber = new Rubber(500,500,60);
    stone = new Stone(400,200,width,height);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
  iron.display();
 rubber.display();
   stone.display();
    
 
}