class Chain{
    constructor(body1,body2,offsetX,offsetY){ 
  this.offsetX = offsetX;
  this.offsetY = offsetY;
      var options = {
     bodyA : body1,
     bodyB : body2,
     pointB:{x:this.offsetX, y:this.offsetY}
        }
    this.PointB = Matter.Constraint.pointB;
    this.Chain = Matter.Constraint.create(options);
    World.add(world, this.Chain);
 }

 display(){

if(this.Chain.bodyA){
var pointA = this.Chain.bodyA.position;
var pointB = this.Chain.bodyB.position;
strokeWeight(4);
stroke("white");
line(pointA.x,pointA.y,pointA.x,pointB.y);  
}
}
}