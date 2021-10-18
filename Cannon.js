class Cannon{

constrtuctor(x,y,w,h){

   // ground = Bodies.rectangle(600,590,1200,10,karthik);
    this.body = Bodies.rectangle(x,y,w,h);
    this.w = w;
    this.h = h;
    World.add(world,this.body);
}
show(){
    rect(this.body.position.x, this.body.position.x , this.w , this.h);
}


}