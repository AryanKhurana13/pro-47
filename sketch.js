var adlez;
var zombie1,zombie2,zombie3,zombie4,zombie5,zombie6,zombie7,zombie8,zombie9,zombie10;
var zombieRight, zombieLeft, zombieFront, zombieBack, zombieStandLeft,zombieStandRight,zombieStandFront, zombieStandBack;
var adlezRight, adlezLeft, adlezFront, adlezBack, adlezStandRight, adlezStandLeft, adlezStandFront, adlezStandBack;
var objects;
var wallGroup;
var Start
var End;


function preload(){
  zombieRight=loadAnimation("images/zombieRight1.png","images/zombieRight2.png","images/zombieRight3.png");
  zombieLeft=loadAnimation("images/zombieLeft1.png", "images/zombieLeft2.png");
  zombieFront=loadAnimation("images/zombieFront1.png", "images/zombieFront2.png");

  zombieStandRight=loadAnimation("images/zombieRight1.png");
  zombieStandLeft=loadAnimation("images/zombieLeft1.png");
  zombieStandFront=loadAnimation("images/zombieFront1.png");
  zombieStandBack=loadAnimation("images/zombieBack1.png");


  
  adlezBack = loadAnimation("images/adlezBack1.png", "images/adlezBack2.png", "images/adlezBack3.png", "images/adlezBack4.png", "images/adlezBack5.png");
  adlezFront = loadAnimation("images/adlezFront1.png", "images/adlezFront2.png", "images/adlezFront3.png", "images/adlezFront4.png", "images/adlezFront5.png");
  adlezRight = loadAnimation("images/adlezRight1.png", "images/adlezRight2.png", "images/adlezRight3.png", "images/adlezRight4.png", "images/adlezRight5.png", "images/adlezRight6.png", "images/adlezRight7.png", "images/adlezRight8.png");
  adlezLeft = loadAnimation("images/adlezLeft1.png", "images/adlezLeft2.png", "images/adlezLeft3.png", "images/adlezLeft4.png", "images/adlezLeft5.png", "images/adlezLeft6.png");

  adlezStandBack = loadAnimation("images/adlezBack1.png");
  adlezStandFront = loadAnimation("images/adlezFront1.png");
  adlezStandRight = loadAnimation("images/adlezRight1.png");
  adlezStandLeft = loadAnimation("images/adlezLeft1.png");

}

function setup() {
  createCanvas(1850, 1000);
  
  adlez=createSprite(30, 35, 50, 50);
  adlez.addAnimation("standRight",adlezStandRight);
  adlez.addAnimation("standLeft",adlezStandLeft);
  adlez.addAnimation("standBack",adlezStandBack);
  adlez.addAnimation("standFront",adlezStandFront);
  
  adlez.addAnimation("left",adlezLeft);
  adlez.addAnimation("right",adlezRight);
  adlez.addAnimation("front",adlezFront);
  adlez.addAnimation("back",adlezBack);

  zombie1 = new Zombie(90, 130);
  zombie1.zombie.velocityY = 1;

  zombie2 = new Zombie(90,530)
  zombie2.zombie.velocityY = 1;

  zombie3 = new Zombie(700,130)
  zombie3.zombie.velocityY = 1;
  
  zombie4 = new Zombie(1450,130)
  zombie4.zombie.velocityY = 1;

  zombie5 = new Zombie(1450, 560);
  zombie5.zombie.velocityY = 1;
  
  zombie6 = new Zombie(1800, 120);
  zombie6.zombie.velocityY = 1;

  zombie7 = new Zombie(610, 620);
  zombie7.zombie.velocityY = 1;

  zombie8 = new Zombie(500, 30);
  zombie8.zombie.velocityX = 1;

  zombie9 = new Zombie(1000, 590);
  zombie9.zombie.velocityX = 1;

  zombie10 = new Zombie(1050, 140);
  zombie10.zombie.velocityY = 1;

  wallGroup = new Group();
  objects = new Objects();
  createWalls();

  edges=createEdgeSprites();

}

function draw() {
  background(0); 
  


  /***CONTROLS OF THE PLAYER */
  if(keyDown("a")){
    adlez.x=adlez.x-4;
    adlez.changeAnimation("left");
  }
  if(keyDown("w")){
    adlez.y=adlez.y-4;
    adlez.changeAnimation("back");
  }
  if(keyDown("s")){
    adlez.y=adlez.y+4;
    adlez.changeAnimation("front");
  }
  if(keyDown("d")){
    adlez.x=adlez.x+4;
    adlez.changeAnimation("right");
  }


  adlez.collide(wallGroup);
  adlez.collide(edges);


  /**** ZOMBIES ****/
  //90, 225 (130, 320) 130 ==> 1 || 320 ==> -1

  if(zombie1.zombie.y===130 || zombie1.zombie.y===320){
    zombie1.zombie.velocityY = zombie1.zombie.velocityY * (-1);
  }

  if(zombie2.zombie.y===520 || zombie2.zombie.y===870){
    zombie2.zombie.velocityY = zombie2.zombie.velocityY * (-1);
  }

  if(zombie3.zombie.y===130 || zombie3.zombie.y===500){
    zombie3.zombie.velocityY = zombie3.zombie.velocityY * (-1);
  }
  
  if(zombie4.zombie.y===130 || zombie4.zombie.y===400){
    zombie4.zombie.velocityY = zombie4.zombie.velocityY * (-1)
  }

  if(zombie5.zombie.y===560 || zombie5.zombie.y===770){
    zombie5.zombie.velocityY = zombie5.zombie.velocityY * (-1)
  }

  if(zombie6.zombie.y===120 || zombie6.zombie.y===500){
    zombie6.zombie.velocityY = zombie6.zombie.velocityY *(-1)
  }

  if(zombie7.zombie.y===620 || zombie7.zombie.y===850){
    zombie7.zombie.velocityY = zombie7.zombie.velocityY *(-1)
  }

  if(zombie8.zombie.x===500 || zombie8.zombie.x===1100){
    zombie8.zombie.velocityX = zombie8.zombie.velocityX *(-1)
  }

  if(zombie9.zombie.x===1000 || zombie9.zombie.x===1250){
    zombie9.zombie.velocityX = zombie9.zombie.velocityX *(-1)
  }

  if(zombie10.zombie.y===140 || zombie10.zombie.y===350){
    zombie10.zombie.velocityY = zombie10.zombie.velocityY *(-1)
  }
  //zombie1.y = 320;

  zombie1.zombieAnimation();
  zombie2.zombieAnimation();
  zombie3.zombieAnimation();
  zombie4.zombieAnimation();
  zombie5.zombieAnimation();
  zombie6.zombieAnimation();
  zombie7.zombieAnimation();
  zombie8.zombieAnimation();
  zombie9.zombieAnimation();
  zombie10.zombieAnimation();

  //distance between adlez & the zombie
  console.log(dist(adlez.x,adlez.y,zombie1.zombie.x,zombie1.zombie.y ));

  
  if(dist1 < 200){
    if(adlez.y > zombie1.zombie.y){
      zombie1.zombie.velocityY = -2;
      zombie1.zombie.velocityX = 0;
    }
  }
  
  if(dist2 < 200){
    if(adlez.y > zombie2.zombie.y){
      zombie2.zombie.velocityY = -2;
      zombie2.zombie.velocityX = 0;
    }
  }

  if(dist3 < 200){
    if(adlez.y > zombie3.zombie.y){
      zombie3.zombie.velocityY = -2;
      zombie3.zombie.velocityX = 0;
    }
  }

  if(dist4 < 200){
    if(adlez.y > zombie4.zombie.y){
      zombie4.zombie.velocityY = -2;
      zombie4.zombie.velocityX = 0;
    }
  }

  if(dist5 < 200){
    if(adlez.y > zombie5.zombie.y){
      zombie5.zombie.velocityY = -2;
      zombie5.zombie.velocityX = 0;
    }
  }

  if(dist6 < 200){
    if(adlez.y > zombie6.zombie.y){
      zombie6.zombie.velocityY = -2;
      zombie6.zombie.velocityX = 0;
    }
  }

  if(dist7 < 200){
    if(adlez.y > zombie7.zombie.y){
      zombie7.zombie.velocityY = -2;
      zombie7.zombie.velocityX = 0;
    }
  }

  if(dist8 < 200){
    if(adlez.y > zombie8.zombie.y){
      zombie8.zombie.velocityY = 0;
      zombie8.zombie.velocityX = -2;
    }
  }

  if(dist9 < 200){
    if(adlez.y > zombie9.zombie.y){
      zombie9.zombie.velocityY = 0;
      zombie9.zombie.velocityX = -2;
    }
  }

  if(dist10 < 200){
    if(adlez.y > zombie10.zombie.y){
      zombie10.zombie.velocityY = -2;
      zombie10.zombie.velocityX = 0;
    }
  }

  drawSprites();
}