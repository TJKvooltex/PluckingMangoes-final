class Tree{

    constructor(x,y){
    var options={isStatic:true}
    this.x=x;
    this.y=y;
    this.width=300;
    this.height=300;
    this.body=Bodies.rectangle(x,y,300,300,options);
    World.add(world,this.body);
    this.image=loadImage("tree.png")
    }
    display(){
        var treepos=this.body.position;     
        push()
        translate(treepos.x, treepos.y);
        imageMode (CENTER)
        image (this.image,0,0,this.width,this.height);
        pop()
    
    }
    
    
    
    }

