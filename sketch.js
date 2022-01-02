//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables
let engine;
let world;
var ball;
var ground;
var rock;
var wall;

function setup() {
  createCanvas(400,400);


  //create engine,world
  engine = Engine.create();
  world = engine.world;
  
  //set ball properties
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   //set ground properties
   var ground_options ={
     isStatic: true
   };
  
   //set rock properties
   var rock_options = {
     restitution: 0.85
   }

   
   
   
  //create ground,add it to Matter.js Bodies along with shape and add it to World
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  //create ball,add it to Matter.js Bodies along with shape and add it to World
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  

  //create rock,add it to Matter.js Bodies along with shape and add it to World
  rock = Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);
  
//create wall,add it to Matter.js Bodies along with shape and add it to World
wall = Bodies.rectangle(300,200,200,20,ground_options);  
World.add(world,wall);
 
 rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x,rock.position.y,20);
  rect(wall.position.x,wall.position.y,200,20);
}

