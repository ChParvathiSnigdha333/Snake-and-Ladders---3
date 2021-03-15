const Engine = Matter.Engine ;
const World = Matter.World ;
const Body = Matter.Body ;
const Bodies = Matter.Bodies;

var engine, world, body;
var board, die;
var bluePawn;
var blueMoved, blueSpaces;

function preload() {
 board = loadImage("sprites/background.png")
}

function setup() {
  createCanvas(725, 600);

  engine = Engine.create();
  world = engine.world;

  bluePawn = new BluePawn(28,570,50,50)
  blueSpaces = 1;
  blueMoved = false;

  die = [false,1,0,false,0]
// 0 = if die is rolling or not
// 1 = current no. displayed
// 2 = times to die
// 3 = blinking time or not
// 4 = blinking counter
}

function draw() {
  background("white");

  Engine.update(engine)

  image(board,0,0,600,600)

  bluePawn.display();

  stroke("black")
  strokeWeight(1)
  fill("black")
  text(mouseX + "," + mouseY, mouseX, mouseY)

  stroke("black")
  strokeWeight(5)
  fill("black")
  line(0,600,600,600)
  line(600,700,600,1)

  // Draw a die or blink it or move it
  if(die[3] === false){
    drawDie(660,320,die[1]);
  }
  else{
    if (die[4] % 2 === 0){
      drawDie(660,320,die[1])
      if(blueMoved === false && blueSpaces !== 100){
        if(blueSpaces % 10 === 0){
          bluePawn.moveUp();
        }
        else{
          var num = Math.floor(blueSpaces/10)
          if(num === 0 || num === 2 || num === 4 || num === 6 || num === 8){
            bluePawn.moveRight();
          }
          else{
            bluePawn.moveLeft();
          }
        }
        blueMoved = true;
        blueSpaces ++;
      }
    }
  }

}

function drawDie(x,y,side){

  stroke("black")
  strokeWeight(3)
  fill("white")
  rectMode(CENTER)
  rect(660,320, 100, 100, 20);

  fill("black")

  if(side === 1){
    circle(x,y,20)
  }
  else if(side === 2){
    circle(x-25,y-25,20)
    circle(x+25,y+25,20)
  }
  else if(side === 3){
    circle(x-27,y-27,20)
    circle(x,y,20)
    circle(x+27,y+27,20)
  } 
  else if(side === 4){
    circle(x-25,y-25,20)
    circle(x+25,y+25,20)
    circle(x+25,y-25,20)
    circle(x-25,y+25,20)
  }
  else if(side === 5){
    circle(x,y,20)
    circle(x-25,y-25,20)
    circle(x+25,y+25,20)
    circle(x+25,y-25,20)
    circle(x-25,y+25,20)
  }
  else if(side === 6){
    circle(x-25,y-30,20)
    circle(x+25,y+30,20)
    circle(x+25,y-30,20)
    circle(x-25,y+30,20)
    circle(x-25,y,20)
    circle(x+25,y,20)
  }

  stroke("black")
  strokeWeight(1)
  fill("skyblue")
  text(mouseX + "," + mouseY, mouseX, mouseY)

}
