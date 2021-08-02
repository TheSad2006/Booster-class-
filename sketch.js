var bg
var sleep
var brush   
var gym, gym1, gym2 
var eat, eat1,eat2; 
var drink,drink1,drink2; 
var astronaut 



function preload() {


bg= loadImage ("iss.png"); 
sleep = loadAnimation ("sleep.png"); 
brush = loadAnimation ("brush.png"); 
gym =  loadAnimation ("gym1.png, gym2.png")
eat =   loadAnimation ("eat1.png, eat2.png")
drink =  loadAnimation ("drink1.png, drink2.png")
}




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
astronaut= createSprite (300,230 ); 
astronaut.addAnimation ("sleeping",sleep); 
astronaut.sclae =0.1; 

if (keyDown("UP_ARROW")){
  astronaut,addAnimation("brushing",brush); 
  astronaut.changeAnimation("brushing"); 
  astronaut.y=350; 
  astronaut.velocityX=0; 
  astronaut.velocityY=0; 

}

if (keyDown("DOWN_ARROW")){
  astronaut,addAnimation("gymming",gyn); 
  astronaut.changeAnimation("gymming"); 
  astronaut.y=250; 
  astronaut.velocityX=0; 
  astronaut.velocityY=0; 
}

if (keyDown("LEFT_ARROW")){
  astronaut,addAnimation("eating",eat); 
  astronaut.changeAnimation("eating"); 
  astronaut.y=350; 
  astronaut.velocityX=0; 
  astronaut.velocityY=0; 


}

if (keyDown("RIGHT_ARROW")){
  astronaut,addAnimation("bathing",bat); 
  astronaut.changeAnimation("brushing"); 
  astronaut.y=350; 
  astronaut.velocityX=0; 
  astronaut.velocityY=0; 
}
}



function draw() {
  background(255,255,255);  
  drawSprites(); 
}

