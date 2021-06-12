var bg,bg2,input1,input2,input3,clue1,clue2,clue3,button1,button2,button3,i1,i2,i3;
var score=0;
 var c1="variable";
 var c2="function";
 var c3="database";




function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  input1 = createInput("").attribute("placeholder", "Key1");
  input1.position(200, 60);
  input2 = createInput("").attribute("placeholder", "Key2");
  input2.position(800, 140);
  input3 = createInput("").attribute("placeholder", "Key3");
  input3.position(200, 240);
  clue1 = createElement('h5');
  clue1.html("Hint: It Does Not Have A Fixed Value" );
  clue1.position(200, 20);
  clue2 = createElement('h5');
  clue2.html("Hint: It Does A Specific Action" );
  clue2.position(800, 100);
  clue3 = createElement('h5');
  clue3.html("Hint: It Stores Data" );
  clue3.position(200, 200);
  button1 = createButton('Check');
  button1.position(200, 90);
  button2 = createButton('Check');
  button2.position(800, 170);
  button3 = createButton('Check');
  button3.position(200, 270);
  
}

function draw() {
  background(bg);

  textSize(20)
  text("Score" + score, 470, 20);

  button1.mousePressed(()=>{
    i1 = input1.value();
    if(i1 == c1){
      score = score+1;
      input1.hide();
      button1.hide();
      clue1.hide();
    }
  });

  button2.mousePressed(()=>{
    i2 = input2.value();
    if(i2 == c2){
      score = score+1;
      input2.hide();
      button2.hide();
      clue2.hide();
    }
  });

  button3.mousePressed(()=>{
    i3 = input3.value();
    if(i3 == c3){
      score = score+1;
      input3.hide();
      button3.hide();
      clue3.hide();
    }
  });

  if(score === 3){
    imageMode(CENTER);
    image(bg2, 500, 250, 1000, 500);
  }
  

  // Add code to display score in the middle of the screen


  // Add code to display the end screen


  drawSprites()
}