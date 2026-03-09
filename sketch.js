var nub=0
var rolly=9
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(nub+6,128,204); //green background
  //circle
  stroke(255,30,30) // red border
  fill(255,rolly,128,150); // green center
  ellipse(nub+15,rolly,20,20); // green oval on left side
  ellipse(nub+15,rolly+30,20,20); // green oval on left side
  ellipse(nub+15,rolly+90,20,20); // green oval on left side
  ellipse(nub+15,rolly+120,20,20); // green oval on left side
  rolly= rolly+2;
  nub= nub+1;
  rect(mouseX-40,mouseY+20,80,40);
  textSize(36);
  textFont('Papyrus');
  text('Emboldened Traversal',65,100);
  fill(rolly,138,200,100);
  textSize(18);
  fill(255,140,50,100);
  textFont('Rosewood');
  text('Dont let them escape',95,150); 
  line(rolly-8,nub-10,130,250);
}

function mousePressed(){
  if (rolly>=100) {rolly=9} else {rolly=rolly+4}
    if (nub>=100) {nub=0} else {nub=nub+4}
}