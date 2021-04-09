let backColor;


function setup() { 
  createCanvas(710, 400);
  //button = createButton('Choose a background Color');
  //button.mousePressed(buttonPressed);
 // button.style ('background-color', '#f5efd5');
 // button.position(300, 450);
  backColor = color( random(255), random(255), random(255) );
   background(backColor);
  

} 

function draw() { 
 stroke(0);
  if (mouseIsPressed === true) {
  rect(mouseX, mouseY, pmouseX, pmouseY) 
    
    
       
  }
 
    

}

function buttonPressed(){
backColor = color( random(255), random(255), random(255) );
}





