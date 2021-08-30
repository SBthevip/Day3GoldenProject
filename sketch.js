var fixedRect, movingRect;
this.Visibility = 255;
function preload (){
img1=loadImage("SpaceImg.jpg")
img2=loadImage("Boss'sMinions!!.gif")
img3=loadImage("NewBoss(1).png")
img4=loadImage("Spaceship(PC).png")
img5=loadImage("Minion.png")
img6=loadImage("BulletOof!(1).png")
}
function setup() {
  createCanvas(1600,700);
  Player1 = createSprite(750, 350);
  Player1.addImage(img4)
  Player1.scale=0.6;  
}


function draw() {
  background(img1);  


  Player1.pointTo(mouseX,mouseY);
  Player1.x=World.mouseX;
  Player1.y=World.mouseY;


  UFO();
  Droid();
  XanderRocks();
  
  if(keyIsDown(UP_ARROW)){
    Bullet();
  }
  
drawSprites();
}
function Droid() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    Player3 = createSprite(1400, 450);
    Player3.addImage(img2)
    Player3.scale=0.4;

    Player3.y = Math.round(random(100,600));
    Player3.velocityX = -15;
    
     //assign lifetime to the variable
    Player3.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
  
}
function UFO() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    
    Player4 = createSprite(1400,100);
    Player4.addImage(img5)
    Player4.scale=0.2;

    Player4.x = Math.round(random(0,200));
    Player4.y = Math.round(random(100,110));
    Player4.velocityX = Math.round(random(7,10));
    Player4.velocityY = Math.round(random(7,10));
     //assign lifetime to the variable
    Player4.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}
function XanderRocks() {
  //write code here to spawn the clouds
  if (frameCount % 1000 === 0) {
    
    Player2 = createSprite(750,5);
    Player2.addImage(img3)
    Player2.scale=0.5;

    Player2.x = Math.round(random(250,1250));
    
    Player2.velocityY = Math.round(random(1,2));
    
     //assign lifetime to the variable
    Player2.lifetime = 300;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}
function Bullet() {
  //write code here to spawn the clouds
    //alert("working")
    Bullet26 = createSprite(750,350);
    Bullet26.addImage(img6)
    Bullet26.scale=0.2;
    // this.Visiblity = this.Visiblity - 5;
    // tint(255,this.Visiblity);
    // image(this.image);
    //  pop();
     //assign lifetime to the variable
    Bullet26.lifetime = 10;
    Bullet26.y=Player1.y;
    Bullet26.x=Player1.x;

    Bullet26.pointTo(mouseX,mouseY)
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);

  // if(keyIsDown(UP_ARROW)){
  //     Bullet26.velocityY = -10;
  //   }
  }