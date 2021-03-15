class BluePawn{
    constructor(x,y,width,height){
        var opt = {
            'friction':0,
            'frictionAir':0.098,
            'density':0.001,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,width,height,opt)
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/bluePiece.png")
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(255);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();
    }
    moveRight(){

    }
    moveLeft(){

    }
    moveUp(){

    }
}