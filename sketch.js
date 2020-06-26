const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(870,300,70,70);
    box2 = new Box(670,300,70,70);
    ground = new Ground(600,height,1200,20)
    pig = new Pig(770,300);
    bird = new Bird(870,150);
    log = new Log(770,240,270,PI/2);
    
    box3 = new Box(870,200,70,70);
    box4 = new Box(670,200,70,70);
    pig1 = new Pig(770,200);
    log1 = new Log(770,140,270,PI/2);

    box5 = new Box(770,100,70,70);
    log2 = new Log(700,40,150,PI/7);
    log3 = new Log(840,40,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX+","+mouseY,20,20);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    bird.display();
    log.display();
    box3.display();
    box4.display();
    pig1.display();
    log1.display();
    box5.display();
    log2.display();
    log3.display();
}