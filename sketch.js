var img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
img11,img12,img13,img14,img15,score=0;

var a,b,c,d,e,f,g,h,i,checkMain;

var totalTime,timeLimit=130;
var finalTime,gameState;

var r1c1,r2c1,r3c1,r1c2,r1c3,r2c2,r2c3,r3c2,r3c3,mainImg,ranImg,restart;



function preload(){
 img1 = loadImage("kathakali.png");
 img2 = loadImage("mountains.png");
 img3 = loadImage("Thali.png");
 img4 = loadImage("ashokstambh.png");
 img5 = loadImage("been.png");
 img6 = loadImage("bird.png");
 img7 = loadImage("king.png");
 img8 = loadImage("lotus.png");
 img9 = loadImage("painting.png");
 img10 = loadImage("painting1.png");
 img11 = loadImage("palaces.png");
 img12 = loadImage("sitar.png");
 img13 = loadImage("Tabla.png");
 img14 = loadImage("tiger.png");
 img15 = loadImage("veena.png");
 bgImg = loadImage("bg.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  r1c1 = createSprite(windowWidth*2.5/5-30, windowHeight*4/5-900, 50, 50);
  setInterval(randomImg,5000);
  r1c1.scale = 0.3;

  r1c2 = createSprite(windowWidth*5/5-30,windowHeight*4/5-900,50,50);
  setInterval(randomImg4,5000);
  r1c2.scale = 0.3;

  r1c3 = createSprite(windowWidth*7.5/5-30,windowHeight*4/5-900,50,50);
  setInterval(randomImg7,5000);
  r1c3.scale = 0.3;

  r2c1 = createSprite(windowWidth*1.5/5-50,windowHeight*4/5-785,50,50);
  setInterval(randomImg2,5000);
  r2c1.scale = 0.3;

  r2c2 = createSprite(windowWidth*4/5-50,windowHeight*4/5-785,50,50);
  setInterval(randomImg5,5000);
  r2c2.scale = 0.3;

  r2c3 = createSprite(windowWidth*6.5/5-60,windowHeight*4/5-785,50,50);
  setInterval(randomImg8,5000);
  r2c3.scale = 0.3;

  r3c1 = createSprite(windowWidth*2.5/5-30,windowHeight*4/5-650,50,50);
  setInterval(randomImg3,5000);
  r3c1.scale = 0.3;

  r3c2 = createSprite(windowWidth*5/5-30,windowHeight*4/5-650,50,50);
  setInterval(randomImg6,5000);
  r3c2.scale = 0.3;

  r3c3 = createSprite(windowWidth*7.5/5-30,windowHeight*4/5-650,50,50);
  setInterval(randomImg9,5000);
  r3c3.scale = 0.3;

  mainImg = createSprite(windowWidth*8/5-1,windowHeight*4/5-785,50,50);
  setInterval(mainRandomImg,5000);
  mainImg.scale = 0.45;
  
  restart = createSprite(windowWidth*7.5/5-30,windowHeight*4/5-650,50,50);

}

function draw() {
  background(bgImg);
  
  totalTime = millis();

  if(a === checkMain){
    if(mousePressedOver(r1c1)){
      score = score + 10;
      touches=[];
    }    
  }
if(a === checkMain){
    if(touches.length>0 && touches[0].x=== r1c1.x && touches[0].y=== r1c1.y){
      score = score + 10;
      touches=[];
    }    
  }

  if(b === checkMain ){
    if(mousePressedOver(r2c1)){
      score = score + 10;
      touches=[];
    }   
  }
if(b === checkMain){
    if(touches.length>0 && touches[0].x=== r2c1.x && touches[0].y=== r2c1.y){
      score = score + 10;
      touches=[];
    }    
  }
  if(c === checkMain){
    if(mousePressedOver(r3c1)){
      score = score + 10;
      touches=[];
    }  
  }
if(c === checkMain){
    if(touches.length>0 && touches[0].x=== r3c1.x && touches[0].y=== r3c1.y){
      score = score + 10;
      touches=[];
    }    
  }
  if(d === checkMain){
    if(mousePressedOver(r1c2)){
      score = score + 10;
      touches=[];
    }    
  }
if(d === checkMain){
    if(touches.length>0 && touches[0].x=== r1c2.x && touches[0].y=== r1c2.y){
      score = score + 10;
      touches=[];
    }    
  }
  if(e === checkMain){
    if(mousePressedOver(r2c2)){
      score = score + 10;
      touches=[];
    }  
  }
if(e === checkMain){
    if(touches.length>0 && touches[0].x=== r2c2.x && touches[0].y=== r2c2.y){
      score = score + 10;
      touches=[];
    }    
  }
  if(f === checkMain){
    
    if(mousePressedOver(r3c2) ){
      score = score + 10;
      touches=[];
      
  }
  }
if(f === checkMain){
    if(touches.length>0 && touches[0].x=== r3c2.x && touches[0].y=== r3c2.y){
      score = score + 10;
      touches=[];
    }    
  }
  if(g === checkMain){
   if(mousePressedOver(r1c3)){
      score = score + 10;
      touches=[];
  }}
if(g === checkMain){
    if(touches.length>0 && touches[0].x=== r1c3.x && touches[0].y=== r1c3.y){
      score = score + 10;
      touches=[];
    }    
  }
  if(h === checkMain){
   if(mousePressedOver(r2c3)){
      score = score + 10;
      touches=[];
  }}
if(h === checkMain){
    if(touches.length>0 && touches[0].x=== r2c3.x && touches[0].y=== r2c3.y){
      score = score + 10;
      touches=[];
    }    
  }
  if(i === checkMain){
    if(mousePressedOver(r3c3)){
      score = score + 10;
      touches=[];
  }}
if(i === checkMain){
    if(touches.length>0 && touches[0].x=== r3c3.x && touches[0].y=== r3c3.y){
      score = score + 10;
      touches=[];
    }    
  }

  push();
  stroke("black");
  fill("cyan");
  rotate(PI*28.5);
  textSize(20);
  text("Score: " + score,windowWidth*8/5-50,windowHeight*4/5-950);
  pop();

  totalTime = int(totalTime/1000)

  stroke("black");
  fill("white");
  rotate(PI*28.5);
  textSize(15);
  text("Time Remaining: ",windowWidth*0.85/5-50,windowHeight*4/5-950);
  text(timeLimit-totalTime,windowWidth*1.86/5-10,windowHeight*4/5-950);

  if(timeLimit-totalTime === 0){
    finalTime = 0;
  }

  if(finalTime===0){
    if(score>=3000){
      fill("yellow");      
      textSize(100);
      text("YOU WIN🤩!",windowWidth*1/5-20,windowHeight*4/5-785);
      
      gameState = 2;
    }

    if(score<3000){
      fill("black");      
      textSize(70);
      text("YOU LOSE😥!",windowWidth*1/5-20,windowHeight*4/5-785);
      
      gameState = 2;
    }
  }

  if(gameState === 2){
    r1c1.visible = false;
    r1c2.visible = false;
    r1c3.visible = false;
    r2c1.visible = false;
    r2c2.visible = false;
    r2c3.visible = false;
    r3c1.visible = false;
    r3c2.visible = false;
    r3c3.visible = false;
    mainImg.visible = false;
    timeLimit = 0;
    totalTime = 0;
    
  }
    
  drawSprites();
}

function randomImg(){
  a = Math.round(random(1,15))
  switch(a){
      
    case 1: r1c1.addImage("image",img1);break
    case 2: r1c1.addImage("image",img2);break
    case 3: r1c1.addImage("image",img3);break
    case 4: r1c1.addImage("image",img4);break
    case 5: r1c1.addImage("image",img5);break
    case 6: r1c1.addImage("image",img6);break
    case 7: r1c1.addImage("image",img7);break
    case 8: r1c1.addImage("image",img8);break
    case 9: r1c1.addImage("image",img9);break
    case 10: r1c1.addImage("image",img10);break
    case 11: r1c1.addImage("image",img11);break
    case 12: r1c1.addImage("image",img12);break
    case 13: r1c1.addImage("image",img13);break
    case 14: r1c1.addImage("image",img14);break
    case 15: r1c1.addImage("image",img15);break
default:break;
  }

}

function randomImg2(){
  b = Math.round(random(1,15))
  switch(b){
    case 1: r2c1.addImage("image",img1);break
    case 2: r2c1.addImage("image",img2);break
    case 3: r2c1.addImage("image",img3);break
    case 4: r2c1.addImage("image",img4);break
    case 5: r2c1.addImage("image",img5);break
    case 6: r2c1.addImage("image",img6);break
    case 7: r2c1.addImage("image",img7);break
    case 8: r2c1.addImage("image",img8);break
    case 9: r2c1.addImage("image",img9);break
    case 10: r2c1.addImage("image",img10);break
    case 11: r2c1.addImage("image",img11);break
    case 12: r2c1.addImage("image",img12);break
    case 13: r2c1.addImage("image",img13);break
    case 14: r2c1.addImage("image",img14);break
    case 15: r2c1.addImage("image",img15);break
default:break;
  }

}

function randomImg3(){
  c = Math.round(random(1,15))
  switch(c){
    case 1: r3c1.addImage("image",img1);break
    case 2: r3c1.addImage("image",img2);break
    case 3: r3c1.addImage("image",img3);break
    case 4: r3c1.addImage("image",img4);break
    case 5: r3c1.addImage("image",img5);break
    case 6: r3c1.addImage("image",img6);break
    case 7: r3c1.addImage("image",img7);break
    case 8: r3c1.addImage("image",img8);break
    case 9: r3c1.addImage("image",img9);break
    case 10: r3c1.addImage("image",img10);break
    case 11: r3c1.addImage("image",img11);break
    case 12: r3c1.addImage("image",img12);break
    case 13: r3c1.addImage("image",img13);break
    case 14: r3c1.addImage("image",img14);break
    case 15: r3c1.addImage("image",img15);break
default:break;
  }

}

function randomImg4(){
  d = Math.round(random(1,15))
  switch(d){
    case 1: r1c2.addImage("image",img1);break
    case 2: r1c2.addImage("image",img2);break
    case 3: r1c2.addImage("image",img3);break
    case 4: r1c2.addImage("image",img4);break
    case 5: r1c2.addImage("image",img5);break
    case 6: r1c2.addImage("image",img6);break
    case 7: r1c2.addImage("image",img7);break
    case 8: r1c2.addImage("image",img8);break
    case 9: r1c2.addImage("image",img9);break
    case 10: r1c2.addImage("image",img10);break
    case 11: r1c2.addImage("image",img11);break
    case 12: r1c2.addImage("image",img12);break
    case 13: r1c2.addImage("image",img13);break
    case 14: r1c2.addImage("image",img14);break
    case 15: r1c2.addImage("image",img15);break
default:break;
  }

}

function randomImg5(){
  e = Math.round(random(1,15))
  switch(e){
    case 1: r2c2.addImage("image",img1);break
    case 2: r2c2.addImage("image",img2);break
    case 3: r2c2.addImage("image",img3);break
    case 4: r2c2.addImage("image",img4);break
    case 5: r2c2.addImage("image",img5);break
    case 6: r2c2.addImage("image",img6);break
    case 7: r2c2.addImage("image",img7);break
    case 8: r2c2.addImage("image",img8);break
    case 9: r2c2.addImage("image",img9);break
    case 10: r2c2.addImage("image",img10);break
    case 11: r2c2.addImage("image",img11);break
    case 12: r2c2.addImage("image",img12);break
    case 13: r2c2.addImage("image",img13);break
    case 14: r2c2.addImage("image",img14);break
    case 15: r2c2.addImage("image",img15);break
default:break;
  }

}

function randomImg6(){
  f = Math.round(random(1,15))
  switch(f){
    case 1: r3c2.addImage("image",img1);break
    case 2: r3c2.addImage("image",img2);break
    case 3: r3c2.addImage("image",img3);break
    case 4: r3c2.addImage("image",img4);break
    case 5: r3c2.addImage("image",img5);break
    case 6: r3c2.addImage("image",img6);break
    case 7: r3c2.addImage("image",img7);break
    case 8: r3c2.addImage("image",img8);break
    case 9: r3c2.addImage("image",img9);break
    case 10: r3c2.addImage("image",img10);break
    case 11: r3c2.addImage("image",img11);break
    case 12: r3c2.addImage("image",img12);break
    case 13: r3c2.addImage("image",img13);break
    case 14: r3c2.addImage("image",img14);break
    case 15: r3c2.addImage("image",img15);break
default:break;
  }

}

function randomImg7(){
  g = Math.round(random(1,15))
  switch(g){
    case 1: r1c3.addImage("image",img1);break
    case 2: r1c3.addImage("image",img2);break
    case 3: r1c3.addImage("image",img3);break
    case 4: r1c3.addImage("image",img4);break
    case 5: r1c3.addImage("image",img5);break
    case 6: r1c3.addImage("image",img6);break
    case 7: r1c3.addImage("image",img7);break
    case 8: r1c3.addImage("image",img8);break
    case 9: r1c3.addImage("image",img9);break
    case 10: r1c3.addImage("image",img10);break
    case 11: r1c3.addImage("image",img11);break
    case 12: r1c3.addImage("image",img12);break
    case 13: r1c3.addImage("image",img13);break
    case 14: r1c3.addImage("image",img14);break
    case 15: r1c3.addImage("image",img15);break
default:break;
  }

}

function randomImg8(){
  h = Math.round(random(1,15))
  switch(h){
    case 1: r2c3.addImage("image",img1);break
    case 2: r2c3.addImage("image",img2);break
    case 3: r2c3.addImage("image",img3);break
    case 4: r2c3.addImage("image",img4);break
    case 5: r2c3.addImage("image",img5);break
    case 6: r2c3.addImage("image",img6);break
    case 7: r2c3.addImage("image",img7);break
    case 8: r2c3.addImage("image",img8);break
    case 9: r2c3.addImage("image",img9);break
    case 10: r2c3.addImage("image",img10);break
    case 11: r2c3.addImage("image",img11);break
    case 12: r2c3.addImage("image",img12);break
    case 13: r2c3.addImage("image",img13);break
    case 14: r2c3.addImage("image",img14);break
    case 15: r2c3.addImage("image",img15);break
default:break;
  }

}

function randomImg9(){
  i = Math.round(random(1,15))
  switch(i){
    case 1: r3c3.addImage("image",img1);break
    case 2: r3c3.addImage("image",img2);break
    case 3: r3c3.addImage("image",img3);break
    case 4: r3c3.addImage("image",img4);break
    case 5: r3c3.addImage("image",img5);break
    case 6: r3c3.addImage("image",img6);break
    case 7: r3c3.addImage("image",img7);break
    case 8: r3c3.addImage("image",img8);break
    case 9: r3c3.addImage("image",img9);break
    case 10: r3c3.addImage("image",img10);break
    case 11: r3c3.addImage("image",img11);break
    case 12: r3c3.addImage("image",img12);break
    case 13: r3c3.addImage("image",img13);break
    case 14: r3c3.addImage("image",img14);break
    case 15: r3c3.addImage("image",img15);break
default:break;


  }

}

function mainRandomImg(){
  ranImg = Math.round(random(1,15))
   if(ranImg === 1){
     mainImg.addImage("image",img1);
     checkMain = 1;
   }

   if(ranImg === 2){
    mainImg.addImage("image",img2);
    checkMain = 2;

  }

  if(ranImg === 3){
    mainImg.addImage("image",img3);
    checkMain = 3;

  }

  if(ranImg === 4){
    mainImg.addImage("image",img4);
    checkMain = 4;

  }

  if(ranImg === 5){
    mainImg.addImage("image",img5);
    checkMain = 5;

  }

  if(ranImg === 6){
    mainImg.addImage("image",img6);
    checkMain = 6;

  }

  if(ranImg === 7){
    mainImg.addImage("image",img7);
    checkMain = 7;

  }

  if(ranImg === 8){
    mainImg.addImage("image",img8);
    checkMain = 8;

  }

  if(ranImg === 9){
    mainImg.addImage("image",img9);
    checkMain = 9;

  }

  if(ranImg === 10){
    mainImg.addImage("image",img10);
    checkMain = 10;

  }

  if(ranImg === 11){
    mainImg.addImage("image",img11);
    checkMain = 11;

  }

  if(ranImg === 12){
    mainImg.addImage("image",img12);
    checkMain = 12;

  }

  if(ranImg === 13){
    mainImg.addImage("image",img13);
    checkMain = 13;

  }

  if(ranImg === 14){
    mainImg.addImage("image",img14);
    checkMain = 14;

  }

  if(ranImg === 15){
    mainImg.addImage("image",img15);
    checkMain = 15;

  }

}

