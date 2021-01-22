class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offSetY = offsetY;
      var options = {
          bodyA : body1,
          bodyB : body2,
          pointB:{x:this.offsetX, y:this.offsetY}
      }

      this.chain = Constraint.create(options);
      World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
        rope2 = new Rope(bobObjecy2.body,ropeObject.body,-bobDiameter*2,0);
        rope3 = new Rope(bobObject3.body,ropeObject.body,-bobDiameter*2,0);
        rope4 = new Rope(bobObject4.body,ropeObject.body,-bobDiameter*2,0);
        rope5 = new Rope(bobObject5.body,roofObject.body,-bobDiameter*2,0);
    }
}

