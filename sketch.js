const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball;
var gameState;
var score = 0;

function preload() {
  backgroundImg = loadImage("maxresdefault-back.jpg");
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
 

  nate = new player(400,200,10);
  ground = new box(400,399,1000,10);

  goalpost = new box(799,200,10,800);
  tpw = new box(400,1,10000,10);
  wall = new box(0,200,30,100000);




  

  blox = new pointer(320,200,30,30);
  blox1 = new pointer(320,190,30,30);
  blox2 = new pointer(320,180,30,30);
  blox3 = new pointer(320,170,30,30);
  blox4 = new pointer(320,160,30,30);

  blox5 = new pointer(340,200,30,30);
  blox6 = new pointer(340,190,30,30);
  blox7 = new pointer(340,180,30,30);
  blox8 = new pointer(340,170,30,30);
  blox9 = new pointer(340,160,30,30);

  blox10 = new pointer(360,200,30,30);
  blox11 = new pointer(360,190,30,30);
  blox12 = new pointer(360,180,30,30);
  blox13 = new pointer(360,170,30,30);
  blox14 = new pointer(360,160,30,30);

  blox15 = new pointer(400,200,30,30);
  blox16 = new pointer(400,190,30,30);
  blox17 = new pointer(400,180,30,30);
  blox18 = new pointer(400,170,30,30);
  blox19 = new pointer(400,160,30,30);

  blox20 = new pointer(420,200,30,30);
  blox21 = new pointer(420,190,30,30);
  blox22 = new pointer(420,180,30,30);
  blox23 = new pointer(420,170,30,30);
  blox24 = new pointer(420,160,30,30);

  blox25 = new pointer(440,200,30,30);
  blox26 = new pointer(440,190,30,30);
  blox27 = new pointer(440,180,30,30);
  blox28 = new pointer(440,170,30,30);
  blox29 = new pointer(440,160,30,30);

  blox30 = new pointer(460,200,30,30);
  blox31 = new pointer(460,190,30,30);
  blox32 = new pointer(460,180,30,30);
  blox33 = new pointer(460,170,30,30);
  blox34 = new pointer(460,160,30,30);

  blox35 = new pointer(480,200,30,30);
  blox36 = new pointer(480,190,30,30);
  blox37 = new pointer(480,180,30,30);
  blox38 = new pointer(480,170,30,30);
  blox39 = new pointer(480,160,30,30);

  blox40 = new pointer(520,200,30,30);
  blox41 = new pointer(520,190,30,30);
  blox42 = new pointer(520,180,30,30);
  blox43 = new pointer(520,170,30,30);
  blox44 = new pointer(520,160,30,30);

  blox45 = new pointer(530,200,30,30);
  blox46 = new pointer(530,190,30,30);
  blox47 = new pointer(530,180,30,30);
  blox48 = new pointer(530,170,30,30);
  blox49 = new pointer(530,160,30,30);

  blox50 = new pointer(540,200,30,30);
  blox51 = new pointer(540,190,30,30);
  blox52 = new pointer(540,180,30,30);
  blox53 = new pointer(540,170,30,30);
  blox54 = new pointer(540,160,30,30);


  chain1 = new SlingShot(nate.body, {
    x : 100,
    y : 200  
  })
 
  Engine.run(engine);

}

function draw() {
  Engine.update(engine);
  background(backgroundImg);  
  chain1.display();
  
  
  
    nate.display();
  
  ground.display2();
  blox.display();
  blox1.display3();
  blox2.display2();
  blox3.display3();
  blox4.display2();
  blox5.display3();
  blox6.display2();
  blox7.display3();
  blox8.display2();
  blox9.display3();

  blox10.display2();
  blox11.display3();
  blox12.display2();
  blox13.display3();
  blox14.display2();
  
  blox15.display2();
  blox16.display3();
  blox17.display2();
  blox18.display3();
  blox19.display2();

  blox20.display2();
  blox21.display3();
  blox22.display2();
  blox23.display4();
  blox24.display2();

  blox25.display2();
  blox26.display3();
  blox27.display2();
  blox28.display3();
  blox29.display5();
  
  blox30.display5();
  blox31.display4();
  blox32.display5();
  blox33.display4();
  blox34.display5();
  
  blox35.display2();
  blox36.display();
  blox37.display2();
  blox38.display4();
  blox39.display2();
  
  blox40.display2();
  blox41.display4();
  blox42.display2();
  blox43.display4();
  blox44.display2();
  
  blox45.display2();
  blox46.display();
  blox47.display2();
  blox48.display();
  blox49.display2();

  blox50.display2();
  blox51.display();
  blox52.display2();
  blox53.display();
  blox54.display2();
  

  
  if(keyCode === 13){
    noStroke();
    textSize(20)
    fill("black")
  text("Credits",100,20);
  text("Developed by aswath",1,45);
  text("Designed by aswath",1,80);
  text("Source code available on github : aswath-maker",1,115);
  text("Please press space if the blue ball is lost",1,150);
  text("This game dosen't have scoring system as our team(okay it is me aswath)couldn't do it",1,180);
  text("We(it is me aswath) were not able to rotate boxes due to bugs(do you have a bug spray)",1,220);
  text("It would mean a lot to me if you liked this game",1,260);
  text("Back ground credits: Google",1,290);
  text("Press A for rules of the game",1,320);
  
}
  
if(keyCode === 65){
  noStroke();
  textSize(20)
  fill("black")
  text("Rules", 1,30);
  text("Rules of the game are quiet simple just create mayhem with the blue ball",1,85);
  text("Once launched from original position you can use arrow keys to move the ball",1,185);
  text("Once all the boxes are over you can refresh the page or just close the browser",1,120);
  text("Launch the blue ball the same you would do an angry bird",1,155);
  text("The name of the game is CubeBreaker",1,55);
}


    noStroke();
  fill("black");
  textSize(20);
  text("press Enter for game information", 500,30);
  
  
  drawSprites();



}

function mouseDragged(){
  Matter.Body.setPosition(nate.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain1.fly();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW ){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:+0.5,y:0});

  }

  if(keyCode === LEFT_ARROW ){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:-0.5,y:0});

  }

  if(keyCode === UP_ARROW ){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:0,y:-0.5});

  }

  if(keyCode === DOWN_ARROW ){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:0,y:+0.5});

}

if(keyCode === 32){
  chain1.attach(nate.body);
   Matter.Body.setPosition(nate.body,{x:100, y:200});
}




}

