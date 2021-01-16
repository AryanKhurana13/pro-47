class Objects{
    constructor(){
        this.wall =[];
    }

    Wall(x, y, w, h, color){
        this.wall.push(createSprite(x,y,w,h));
        wallGroup.add(this.wall[this.wall.length-1]);
        this.wall[this.wall.length-1].shapeColor=color;
    }


}

/*
arra = [1,2,3];

arra[2]

*/