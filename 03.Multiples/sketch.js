let theText = ["M", "A", "1", "8", "0", "5" ];
let word = theText[0];
let i = 0;


function setup() {
  createCanvas(400, 400);
  frameRate(2);
}

function draw() {
  background(30, 30, 60);


  //Title
  fill(255);
  textSize(18);
  textAlign(CENTER);
  text("Multiples", 200, 30);
  

  //The text display
  fill (255, 160, 210);
  textSize(70);
  textAlign(CENTER);
  text(word, 200, height/2);

  // Move to the next character
  word = theText[i];
  i++;

  //Restart sequence
  if (i >= theText.length) {
    i= 0;
  }
      console.log(i)
}
