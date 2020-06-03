var fixedrect,movingrect;
var gameObject ;
function setup() {
  createCanvas(600,800);
  fixedrect  =  createSprite(300, 300, 50, 20);
  movingrect = createSprite (450,200,40,60);
  gameObject = createSprite (210,140,30,70);
  
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "green";
  gameObject.shapeColor = "green";

  gameObject.debug = true;
  fixedrect.debug = true;
  movingrect.debug = true;

}

function draw() {
  background(210,255,255);

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2 ){
    
    movingrect.shapeColor = "red";  
    fixedrect.shapeColor = "red";

    
  } 
   
  



  if( movingrect.x-gameObject.x < movingrect.width/2+gameObject.width/2 && 
    gameObject.x-movingrect.x < gameObject.width/2+movingrect.width/2 &&
    movingrect.y-gameObject.y < movingrect.height/2 + gameObject.height/2 &&
    gameObject.y-movingrect.y < gameObject.height/2 + movingrect.height/2 ){
    
    gameObject.shapeColor = "red";  
    movingrect.shapeColor = "red";

  } 

    //  ShapeColor();
  

  
  textSize(18);
  fill("red");
  text("person affected by corona virus",170,280); 
  fill("green");
  text("green = not affected by corona virus  ; red = affected by corona virus",40,100);
  text("first go and collide with the person who is affected by corona virus",30,40); 
  drawSprites();
  
}

/*function ShapeColor (){
  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2 ){
    
    gameObject.shapeColor = "red";  
    
    
  }*/


