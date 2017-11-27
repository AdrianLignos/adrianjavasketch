var diam1=0;
function setup() {
  // put setup code here
    createCanvas(500,500);
}

function draw() {
  // put drawing code here
    background("#003366"); 
    fill("#add8e6");
    stroke("#ffff00");
    strokeWeight(5);
    fill("blue");
    ellipse(250,250,diam1,diam1);
    ellipse(mouseX,mouseY,20,20);
    diam1=diam1+5;
    if(diam1>700){
        diam1=0;     
    }
    }

    
    
    
