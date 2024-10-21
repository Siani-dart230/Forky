var x = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(197, 228, 250); 
  
  //ground 
  fill(85,156,40);
  rect(0,300,400,290); 
  
  fill(255); 
  strokeWeight(2) 
  
  //head 
  fill(248, 250, 247);
  ellipse(200,140,80,110) 
  strokeWeight(4) 
  
  //smile, make the blue outline with ellipse 
  ellipse(200,180,25,8)
  fill(5, 9, 237) 
  
  //arms and hands 
  //right hand
  strokeWeight(5) 
  fill(245,11,7)
  line(280,270,200,200);
  
  push();
  translate(280,260);
  rotate(radians(90));
  ellipse(0,0,10,28);
  pop();
  
  push();
  translate(270,270);
  rotate(radians(5));
  ellipse(0,0,10,28)
  pop();
  
  push(); 
  translate(280,268);
  rotate(radians(300));
  ellipse(0,0,10,28) 
  pop();
  
   //left hand
  line(90, 275, 200,200) 
  
  push();
  translate(90,265);
  rotate(radians(90));
  ellipse(0,0,10,28);
  pop();
  
  push();
  translate(100,275);
  rotate(radians(180));
  ellipse(0,0,10,28);
  pop(); 
  
  push();
  translate(90,275);
  rotate(radians(230));
  ellipse(0,0,10,28);
  pop();
  
  //eyes
  fill(248, 250, 247 );
  strokeWeight(0.5)
  ellipse(180,140,25,28) 
  ellipse(215,145,15,17) 
  fill(10, 10, 10) 
  ellipse(180,140,15,15) 
  ellipse(215,145,10,9)
  
  //body 
   strokeWeight(2) 
  fill(248, 250, 247); 
  rect(185,195,30,150)
  
  //feet 
  fill(209,169,67)  
  rect(135,330,50,20) 
  rect(215,330,50,20)
  
  
  // flash 
  x = x + 1 
  if( x % 10 === 0) 
    { 
     fill(252, 252, 20);
      ellipse(360,20,150,150); 
     }
  
   
  
  
  
}