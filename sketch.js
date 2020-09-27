

//Moviment c1
let xmv; 
let ymv; 
let bolet; 

//Moviment c2
let xmv2; 
let ymv2; 
let bolet2; 

//Moviment c3
let xmv3;
let ymv3;
let bolet3; 

//Moviment c4
let xmv4;
let ymv4;
let bolet4; 

//Moviment c5
let xmv5;
let ymv5;
let bolet5; 

//Moviment c6
let xmv6;
let ymv6;
let bolet6; 

//Moviment c7
let xmv7;
let ymv7;
let bolet7;

//Moviment c8
let xmv8;
let ymv8;
let bolet8;

//Moviment c9
let xmv9;
let ymv9;
let bolet9;

//Moviment c10
let xmv10;
let ymv10;
let bolet10;

//Moviment c11
let xmv11;
let ymv11;
let bolet11;

//Moviment c12
let xmv12;
let ymv12;
let bolet12

//Moviment c13
let xmv13;
let ymv13;
let bolet13;
//Colorss i Alpha
let redC = 0;
let alph = 0;

function Ci1_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
   
    
    if(xmv <= 600) bolet = true;
    //if(xmv >= 900) bolet = false;

    if (bolet == false){
      xmv -= dif1;
      ymv += dif1;

    }

    if (bolet == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv);
    console.log(bolet);

    circle(xmv, ymv, 80 );

}







function Ci2_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    //if(xmv2 <= 600) bolet2 = false;
    if(xmv2 >= 950) bolet2 = true;

    if (bolet2 == false){
      xmv2 += dif1;
      ymv2 -= dif1;

    }

    if (bolet2 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv2);
    console.log(bolet2);

    circle(xmv2, ymv2, 80 );

}







function Ci3_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    if(xmv3 <= 1000) bolet3 = true;
    //if(xmv3 >= 970) bolet3 = true;

    if (bolet3 == false){
      xmv3 -= dif1;
      ymv3 += dif1;

    }

    if (bolet3 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv3);
    console.log(bolet3);

    circle(xmv3, ymv3,80);

}








function Ci4_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    if(xmv4 <= 700) bolet4 = true;
    //if(xmv3 >= 970) bolet3 = true;

    if (bolet4 == false){
      xmv4 -= dif1;
      ymv4 += dif1;

    }

    if (bolet4 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv4);
    console.log(bolet4);

    circle(xmv4, ymv4,80);

}







function Ci5_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    //if(xmv5 <= 700) bolet5 = false;
    //if(xmv3 >= 970) bolet3 = true;
    //if(xmv2 <= 600) bolet2 = false;
    if(xmv5 >= 970) bolet5 = true;

    if (bolet5 == false){
      xmv5 += dif1;
      ymv5 -= dif1;

    }

    if (bolet5 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv5);
    console.log(bolet5);

    circle(xmv5, ymv5,80);

}








function Ci6_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    if(xmv6 <= 700) bolet6 = true;
    //if(xmv3 >= 970) bolet3 = true;
    //if(xmv2 <= 600) bolet2 = false;
    //if(xmv6 >= 970) bolet6 = true;

    if (bolet6 == false){
      xmv6 -= dif1;
      ymv6 += dif1;

    }

    if (bolet6 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv6);
    console.log(bolet6);

    circle(xmv6, ymv6,80);

}





function Ci7_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    if(xmv7 <= 1030) bolet7 = true;
    //if(xmv3 >= 970) bolet3 = true;

    if (bolet7 == false){
      xmv7 -= dif1;
      ymv7 += dif1;

    }

    if (bolet7 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv7);
    console.log(bolet7);

    circle(xmv7, ymv7,80);

}






function Ci8_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    //if(xmv5 <= 700) bolet5 = false;
    //if(xmv3 >= 970) bolet3 = true;
    //if(xmv2 <= 600) bolet2 = false;
    if(xmv8 >= 970) bolet8 = true;

    if (bolet8 == false){
      xmv8 += dif1;
      ymv8 -= dif1;

    }

    if (bolet8 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv8);
    console.log(bolet8);

    circle(xmv8, ymv8,80);

}






function Ci9_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    if(xmv9 <= 700) bolet9 = true;
    //if(xmv3 >= 970) bolet3 = true;
    //if(xmv2 <= 600) bolet2 = false;
    //if(xmv6 >= 970) bolet6 = true;

    if (bolet9 == false){
      xmv9 -= dif1;
      ymv9 += dif1;

    }

    if (bolet9 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv9);
    console.log(bolet9);

    circle(xmv9, ymv9,80);

}





function Ci10_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    if(xmv10 <= 1030) bolet10 = true;
    //if(xmv3 >= 970) bolet3 = true;

    if (bolet10 == false){
      xmv10 -= dif1;
      ymv10 += dif1;

    }

    if (bolet10 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv10);
    console.log(bolet10);

    circle(xmv10, ymv10,80);

}







function Ci11_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    //if(xmv5 <= 700) bolet5 = false;
    //if(xmv3 >= 970) bolet3 = true;
    //if(xmv2 <= 600) bolet2 = false;
    if(xmv11 >= 970) bolet11 = true;

    if (bolet11 == false){
      xmv11 += dif1;
      ymv11 -= dif1;

    }

    if (bolet11 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv11);
    console.log(bolet11);

    circle(xmv11, ymv11,80);

}








function Ci12_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    if(xmv12 <= 700) bolet12 = true;
    //if(xmv3 >= 970) bolet3 = true;
    //if(xmv2 <= 600) bolet2 = false;
    //if(xmv6 >= 970) bolet6 = true;

    if (bolet12 == false){
      xmv12 -= dif1;
      ymv12 += dif1;

    }

    if (bolet12 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv12);
    console.log(bolet12);

    circle(xmv12, ymv12,80);

}




function Ci13_Movement(){
    
  fill(redC,0,0,0.5);
  
  if (redC < 255) {
    redC = redC+0.13;
  }
  
    let dif1 = 0.18;
    let dif2 = 0.2
    
    if(xmv13 <= 1030) bolet13 = true;
    //if(xmv3 >= 970) bolet3 = true;

    if (bolet13 == false){
      xmv13 -= dif1;
      ymv13 += dif1;

    }

    if (bolet13 == true){
     // xmv -= dif1
     // ymv -= dif1
      
    }
    console.log(xmv13);
    console.log(bolet13);

    circle(xmv13, ymv13,80);

}
//Setup
function setup() {

  let dW = 1920;
  let dH = 1080;

  //Moviment c1
 xmv = 920;
 ymv = 65;
 bolet = false
  
 //Moviment c2
 xmv2 = 600;
 ymv2 = 500;
 bolet2 = false

 //Moviment c3
 xmv3 = 1205;
 ymv3 = 10;
 bolet3 = false

 //Moviment c4
 xmv4 = 950;
 ymv4 = 265;
 bolet4 = false

 //Moviment c5
 xmv5 = 550;
 ymv5 = 780;
 bolet5 = false


 //Moviment c6
 xmv6 = 950;
 ymv6 = 495;
 bolet6 = false

 //Moviment c7
 xmv7 = 1205;
 ymv7 = 250;
 bolet7 = false

 //Moviment c8
 xmv8 = 550;
 ymv8 = 1010;
 bolet8 = false

 //Moviment c9
 xmv9 = 950;
 ymv9 = 725;
 bolet9 = false

 //Moviment c10
 xmv10 = 1205;
 ymv10 = 450;
 bolet10 = false

 //Moviment c11
 xmv11 = 550;
 ymv11 = 1240;
 bolet11 = false

 //Moviment c12
 xmv12 = 950;
 ymv12 = 955;
 bolet12 = false

 //Moviment c13
 xmv13 = 1205;
 ymv13 = 650;
 bolet13 = false

     
  createCanvas(dW, dH);

    
  background(0);
  
  noStroke()

 
}


function mousePressed() {
  setup();
}


function deviceShaken() {
  setup();
  }
function draw() {
  textSize(75);


  
  Ci1_Movement();
  Ci2_Movement();
  Ci3_Movement();
  Ci4_Movement();
  Ci5_Movement();
  Ci6_Movement();
  Ci7_Movement();
  Ci8_Movement();
  Ci9_Movement();
  Ci10_Movement();
  Ci11_Movement();
  Ci12_Movement();
  Ci13_Movement();


  fill(255, 255, 255);
  text('R', 1980/2.1, 100);
  text('É', 1980/1.9, 200);
  text('S', 1980/2.1, 300);
  text('O', 1980/1.9, 400);
  text('N', 1980/2.1, 500);
  text('A', 1980/1.9, 600);
  text('N', 1980/2.1, 720);
  text('C', 1980/1.9, 820);
  text('E', 1980/2.1, 950);

  
}

