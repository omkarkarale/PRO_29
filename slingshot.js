class Slingshot {
    constructor(body1,pointB){
        var options = {
            bodyA : body1,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body1){
        this.sling.bodyA = body1;
    }
    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.sling.pointB;
            push();
            if(posA.x < 220){
                strokeWeight(7);
                stroke(48,22,8);
                line(posA.x, posA.y, posB.x, posB.y);
            }
            else{
                strokeWeight(3);
                stroke(48,22,8);
                line(posA.x-20, posA.y, posB.x-10, posB.y);
            }
            pop();
        }  
    }
}