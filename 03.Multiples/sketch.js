let theText = ["some", "Text", "To", "Display" ];
let word = theText[0];
let i = 0;


function setup() {
  createCanvas(400, 400);
  frameRate(2);
}

function draw() {
  background(220);
  

  //The text display
  textSize(70);
  text(word, random(200), height/2);

  word = theText[i];
  i++
  if(i>=theText.length){
    i=0;
  }
      console.log(i)
}
