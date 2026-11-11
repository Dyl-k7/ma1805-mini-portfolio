let i=0; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30, 30, 60);

  //Title
  fill(255);
  textSize(18);
  textAlign(CENTER);
  text("Movement", 200, 30);
  
  //Face
  fill(255, 180, 210);
  stroke(255); //White Outline
  strokeWeight(2); //Outline thickness
  ellipse(200, 210, 280, 300);


  //Eyes
  fill(255, 80, 80);
  stroke(255);  //Eye Outline colour
  strokeWeight(2); //Eye Outline thickness
  square(105, 120, 50);
  square(245, 120, 50);

  //Mouth
  fill(80, 255, 80);
  ellipse(200, 285, 150, 25);

  //Growing nose
  fill (80,255,150);
  triangle(185, 190, 215, 190, 200, 190 + i);


  //Increment i
  i = i+1;

  if (i > 65){
    i =0;
  }
  
}
