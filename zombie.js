class Zombie{
    constructor(x,y){
        this.zombie=createSprite(x, y ,50,50);
        
        this.zombie.addAnimation("right",zombieRight);
        this.zombie.addAnimation("left",zombieLeft); 
        this.zombie.addAnimation("front",zombieFront);
        
        this.zombie.addAnimation("standBack",zombieStandBack);
        this.zombie.addAnimation("standfront",zombieStandFront);
        this.zombie.addAnimation("standRight",zombieStandRight);
        this.zombie.addAnimation("standLeft",zombieStandLeft);
      
         
        this.zombie.scale = 0.8;
    }

    zombieAnimation(){
        if(this.zombie.velocityX<0){
            this.zombie.changeAnimation("left");
        }
        if(this.zombie.velocityX<0){
            this.zombie.changeAnimation("right");
        }
        if(this.zombie.velocityY<0){
            this.zombie.changeAnimation("standBack");
        }
        if(this.zombie.velocityY>0){
            this.zombie.changeAnimation("front");
        }

    }
}

