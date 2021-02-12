class Umbrella {
  constructor(x,y){
      var options = {
          isStatic: true,
      }
      this.anim = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
      "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png",
      "images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png",
      "images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png",);
      this.umbrella = Bodies.circle(x,y,75,options);
      this.radius = 75;
      World.add(world, this.umbrella)
  }

  display(){
      var pos = this.umbrella.position;
      push()
      scale(0.5)
      animation(this.anim,pos.x+320,pos.y+630,2, 2);
      pop();
  }
}