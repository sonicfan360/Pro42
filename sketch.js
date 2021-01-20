const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Bruce, BruceImage
var Thunder, ThunderImage

var i 
var rain = []

function preload(){
BruceImage = loadImage("images/Walking Frame/walking_1.png");
ThunderImage = loadImage("images/thunderbolt/3.png");  
}

function setup(){
    createCanvas(400,700)
    engine = Engine.create();
    world = engine.world;
 Bruce = createSprite(200,530,50,50);
 Bruce.addImage("walking_1", BruceImage)
 Bruce.scale = 0.5

 Thunder = createSprite(200,100,50,50);
 Thunder.addImage("3", ThunderImage);
 Thunder.scale = 0.4
  
 for(i=0; i<100; i++){
  rain.push(new drops(random(0,400),random(0,700),5))
}                                                                                                                                                                                                                                                                                                                                                                                                  


}

function draw(){
  background("black")
  Engine.update(engine);
  
  for(i=0; i<rain.length; i++){
    rain[i].display();
    rain[i].UpdateDrops();
  }

  
  drawSprites(); 
}   

