var fixedRect, movingRect;
var fixed1;
var fixed2;
var movobject,fixedobject;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;
 fixed1 = createSprite(100,100,30,90);
 fixed1.shapeColor="green";
 fixed2=createSprite(300,100,80,180);
 fixed2.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(touch(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else if(touch(movingRect,fixed1)){
   movingRect.shapeColor ="red";
   fixed1.shapeColor="red";
 }
 else if(touch(movingRect,fixed2)){
   movingRect.shapeColor="red";
   fixed2.shapeColor="red";
 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  fixed1.shapeColor="green";
  fixed2.shapeColor ="green";

 }
 
  drawSprites();
}

function touch(movobject,fixedobject){
  if (movobject.x - fixedobject.x < fixedobject.width/2 + movobject.width/2
    && fixedobject.x - movobject.x < fixedobject.width/2 + movobject.width/2
    && movobject.y - fixedobject.y < fixedobject.height/2 + fixedobject.height/2
    && fixedobject.y - movobject.y < fixedobject.height/2 + movobject.height/2) {
      return true;

}
else {
  return false;
  
}

}