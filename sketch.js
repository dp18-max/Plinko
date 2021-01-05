const Engine = Matter.Engine
const World = Matter.Engine
const Bodies = Matter.Engine
const Constraint = Matter.Constraint

var engine,world; 
var particles = [];
var plinkos=[];
var rows=[];
var ground;
var rows;


var rowsHeight = 150;

function setup() {

  
  createCanvas(600,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);

  for(var a = 40; a<= width; a = a+50){
    plinkos.push(new Plinko(a , 55))
  }
  for(var a = 15;a<= width-10; a = a+50){
    plinkos.push(new Plinko(a ,85))
  }
  for(var a = 40; a<= width-10; a = a+50){
    plinkos.push(new Plinko(a ,120))
  }
  for(var a = 15; a<= width-10; a = a+50){
    plinkos.push(new Plinko(a ,150))
  }
  for(var a = 40; a<= width-10; a = a+50){
    plinkos.push(new Plinko(a ,185))
  }
  for(var a = 15; a<= width-10; a = a+50){
    plinkos.push(new Plinko(a ,225))
  }
  for(var a = 40; a<= width-10; a = a+50){
    plinkos.push(new Plinko(a ,265))
  }
  for(var a = 15; a<= width-10; a = a+50){
    plinkos.push(new Plinko(a ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(0);
  if(frameCount % 30 === 0){
    particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }

  
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

 
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }


  for(var a = 0; a<plinkos.length;a++){
    plinkos[a].display();
 }


//rows.display();
 ground.display();

  drawSprites();
}