 var tom;
 var jerry;
 var tomImage1,jerryImage1,tomImage2,jerryImage2,tomImage3,jerryImage3;
 var background;
 var canvas;

function preload() {
    //load the images here
   backgroundImg= loadImage("images/garden.png");
   tomImage1= loadAnimation("images/tomOne.png");
   tomImage2= loadAnimation("images/tomTwo.png","images/tomThree.png");
   tomImage3= loadAnimation("images/tomFour.png");
   jerryImage1= loadAnimation("images/jerryOne.png");
   jerryImage2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
   jerryImage3= loadAnimation("images/jerryFour.png")
   
}

function setup(){
    canvas=createCanvas(1000,800);
    //create tom and jerry sprites here
    tom= createSprite(870,600);
    tom.addAnimation("tomSleepong",tomImage1);
    tom.scale=0.2;

    jerry= createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerryImage1);
    jerry.scale=0.15;
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
 if(tom.x-jerry.x<(tom.width-jerry.width)/2)
 {
     tom.velocityX=0;
     tom.addAnimation("tomLastImage",tomImage3);
     tom.X=300;
     tom.scale=0.2;
     tom.changeAnimation("tomLastImage");
     jerry.addAnimation("jerryLastImage",jerryImage3);
     jerry.scale=0.15;
     jerry.changeAnimation("jerryLastImage");
 }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode===LEFT_ARROW){
       tom.velocityX=-5;
       tom.addAnimation("tomRunning",tomImage2);
       tom.changeAnimation("tomRunning");

       jerry.addAnimation("jerryTeasing",jerryImage2);
       jerry.frameDelay=25;
       jerry.changeAnimation("jerryTeasing");
   }

}
