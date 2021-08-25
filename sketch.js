
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadImage(C:\Users\Dev\Downloads\Project_Template_C10_Travelling_in_Ship-main\Project_Template_C10_Travelling_in_Ship-main\ship-1.png);

function setup(){
  createCanvas(400,400);
  spriteName.addImage(seaImg);
}

function draw() {
  background("blue");
 if(sea.x < 0){
   sea.x = sea.width/2;
 }
}