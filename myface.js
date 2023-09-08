function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 189, 189);
  
  // draw hair
  noStroke();
  fill(64, 57, 57);
  rect(100, 80, 200, 300, 100, 100, 0, 0 );
  
  // draw ears
  noStroke();
  fill(255, 214, 173);
  
  translate(130, 200);
  rotate(-PI/180*20);
  ellipse(0, 0, 30, 55);
  rotate(PI/180*20);
  translate(-130, -200);
  
  noStroke();
  fill(255, 214, 173);
  
  translate(270, 200);
  rotate(PI/180*20);
  ellipse(0, 0, 30, 55);
  rotate(-PI/180*20);
  translate(-270, -200);
  

  // draw face
  noStroke();
  fill(255, 224, 194);
  ellipse(200, 200,140, 180);
  
  // draw eyebrow + eyes + nose + mouth + hand
  
  // eyes
  stroke('rgb(31,31,31)');
  strokeWeight(18);
  point(165, 180);
  
  stroke('rgb(31,31,31)');
  strokeWeight(18);
  point(233, 180);
  
  //nose
  noStroke();
  fill(252, 213, 182);
  ellipse(200, 210, 28, 55);
  
  //mouth
  fill(252, 131, 104);
  arc(200, 255, 40, 35, 0, PI + QUARTER_PI, CHORD);
  
  //eyebrow
  noFill();
  stroke('rgb(31,31,31)');
  strokeWeight(6);
  arc(160, 160, 30, 10, PI, 0 );
  arc(240, 160, 30, 10, PI, 0 );
  
  //hand
  noStroke();
  fill(255, 224, 194);
  ellipse(60, 340, 30, 30);
  
  noStroke();
  fill(255, 224, 194);
  
  translate(100, 380);
  rotate(-PI/180*20);
  ellipse(0, 0, 60, 160);
  rotate(PI/180*20);
  translate(-100, -380);
  


  // draw glasses
  noFill()
  stroke(100)
  strokeWeight(5)
  rect(135,165,63,45,15)
  rect(205,165,63,45,15)
  
  // draw blush + fish
  //blush
  stroke(255, 153, 153)
  strokeWeight(5)
  line(150, 205, 145, 220);
  line(160, 200, 155, 220);
  line(170, 205, 165, 220);
  
  line(250, 205, 245, 220);
  line(240, 200, 235, 220);
  line(230, 205, 225, 220);
  
  //fish
  stroke(255);
  strokeWeight(3);
  fill(94, 178, 219); 
  
  translate(90, 340);
  rotate(PI/180*20);
  ellipse(0, 0, 40, 100);
  rotate(-PI/180*20);
  translate(-100, -380);
  
  triangle(40, 450, 82, 427, 100, 450);
  
  line(105,350,110,360);
  line(105,360,111,350);


}
