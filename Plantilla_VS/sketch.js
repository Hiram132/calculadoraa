var boton0
var boton9
var boton8
var boton7
var boton6
var boton5
var boton4
var boton3
var boton2
var boton1
var botonsuma
var botonresta
var botonmulti
var botondiv
var botonigualdad
var botonclean
var valor = 0
var valor2 = 0
var result = 0
var operacionsuma = false
var operacionresta = false
var operacionmulti = false
var operaciondiv = false
var operacionce = false


//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

function setup() {


  createCanvas(500,715);

 //boton0 = createSprite(180,660,100,100);
 boton0 = createButton('0');
 boton0.style("font-size","40px")
 boton0.position(130,610);
 boton0.size(100,100);
 boton0.mousePressed(value0);
 //boton0.mouseClicked(value0)



 //boton1 = createSprite(60,540,100,100);
 boton1 = createButton('1');
 boton1.style("font-size","40px")
 boton1.position(10,490);
 boton1.size(100,100);
 boton1.mousePressed(value1);
 //boton1.mouseClicked(value1)



 //boton2 = createSprite(180,540,100,100);
 boton2 = createButton('2');
 boton2.style("font-size","40px")
 boton2.position(130,490);
 boton2.size(100,100);
 boton2.mousePressed(value2);
 //boton2.mouseClicked(value2)



 //boton3 = createSprite(300,540,100,100);
 boton3 = createButton('3');
 boton3.style("font-size","40px")
 boton3.position(250,490);
 boton3.size(100,100);
 boton3.mousePressed(value3);
 //boton3.mouseClicked(value3)



 //boton4 = createSprite(60,420,100,100);
 boton4 = createButton('4');
 boton4.style("font-size","40px")
 boton4.position(10,370);
 boton4.size(100,100);
 boton4.mousePressed(value4);
 //boton4.mouseClicked(value4)



 //boton5 = createSprite(180,420,100,100);
 boton5 = createButton('5');
 boton5.style("font-size","40px")
 boton5.position(130,370);
 boton5.size(100,100);
 boton5.mousePressed(value5);
 //boton5.mouseClicked(value5)



 //boton6 = createSprite(300,420,100,100);
 boton6 = createButton('6');
 boton6.style("font-size","40px")
 boton6.position(250,370);
 boton6.size(100,100);
 boton6.mousePressed(value6);
 //boton6.mouseClicked(value6)



 //boton7 = createSprite(60,300,100,100);
 boton7 = createButton('7');
 boton7.style("font-size","40px")
 boton7.position(10,250);
 boton7.size(100,100);
 boton7.mousePressed(value7);
 //boton7.mouseClicked(value7)



 //boton8 = createSprite(180,300,100,100);
 boton8 = createButton('8');
 boton8.style("font-size","40px")
 boton8.position(130,250);
 boton8.size(100,100);
 boton8.mousePressed(value8);
 //boton8.mouseClicked(value8)



 //boton9 = createSprite(300,300,100,100);
 boton9 = createButton('9');
 boton9.style("font-size","40px")
 boton9.position(250,250);
 boton9.size(100,100);
 boton9.mousePressed(value9);
 //boton9.mouseClicked(value9)



//-------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------



 //botonsuma = createSprite(420,300,100,100);
 botonsuma = createButton('+');
 botonsuma.style("font-size","40px")
 botonsuma.position(370,250);
 botonsuma.size(100,100);
 botonsuma.mousePressed(valuesum);
 //botonsuma.mouseClicked(valuesum)



 //botonresta = createSprite(420,420,100,100);
 botonresta = createButton('-');
 botonresta.style("font-size","40px")
 botonresta.position(370,370);
 botonresta.size(100,100);
 botonresta.mousePressed(valuetake);
 //botonresta.mouseClicked(valuetake)



 //botonmulti = createSprite(420,540,100,100);
 botonmulti = createButton('x');
 botonmulti.style("font-size","40px")
 botonmulti.position(370,490);
 botonmulti.size(100,100);
 botonmulti.mousePressed(valuemulti);
 //botonmulti.mouseClicked(valuemulti)



 //botondiv = createSprite(420,660,100,100);
 botondiv = createButton('%');
 botondiv.style("font-size","40px")
 botondiv.position(370,610);
 botondiv.size(100,100);
 botondiv.mousePressed(valuediv);
 //botondiv.mouseClicked(valuediv)



 //----------------------------------------------------------------------------------------------------------------------------
 //-----------------------------------------------------------------------------------------------------------------------------



  //botonigualdad = createSprite(180,660,100,100);
  botonigualdad = createButton('=');
  botonigualdad.style("font-size","40px")
  botonigualdad.position(250,610);
  botonigualdad.size(100,100);
  botonigualdad.mousePressed(valueigualdad);
  //botonigualdad.mouseClicked(valueigualdad)



  //botonclean = createSprite(180,660,100,100);
  botonclean = createButton('CE');
  botonclean.style("font-size","40px")
  botonclean.position(10,610);
  botonclean.size(100,100);
  botonclean.mousePressed(valueclean);
  //botonclean.mouseClicked(valuece)

}



//-----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------



function draw() {


  background(51);

  fill("white");
  rect(10,20,460,200);

  fill("black");
  textSize(80)

  text(valor,50,140);
  text(valor2,50,200);
  text(result,360,140);


 drawSprites();


}



//--------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------



function value0(){
   valor=0
  return valor
}
function value1(){
   valor=1
  return valor
}
function value2(){
   valor=2
  return valor
}
function value3(){
   valor=3
  return valor
}
function value4(){
   valor=4
 return valor
}
function value5(){
   valor=5
  return valor
}
function value6(){
   valor=6
  return valor
}
function value7(){
   valor=7
  return valor
}
function value8(){
   valor=8
  return valor
}
function value9(){
   valor=9
  return valor
}
   


//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------



function valuesum(botonsuma){

   operacionsuma = true;


   boton0.mousePressed(value0v => {
      valor2 = 0;
      return valor2 ;
    })
    boton1.mousePressed(value1v => {
      valor2 = 1;
      return valor2 ;
    })
    boton2.mousePressed(value2v => {
      valor2 = 2;
      return valor2 ;
    })
    boton3.mousePressed(value3v => {
      valor2 = 3;
      return valor2 ;
    })
    boton4.mousePressed(value4v => {
      valor2 = 4;
      return valor2 ;
    })
    boton5.mousePressed(value5v => {
      valor2 = 5;
      return valor2 ;
    })
    boton6.mousePressed(value6v => {
      valor2 = 6;
      return valor2 ;
    })
    boton7.mousePressed(value7v => {
      valor2 = 7;
      return valor2 ;
    })
    boton8.mousePressed(value8v => {
      valor2 = 8;
      return valor2 ;
    })
    boton9.mousePressed(value9v => {
      valor2 = 9;
      return valor2 ;
    })
}

//--------------------------------------------------------------------------------------------------------------------------------


function valuetake(botonresta){

   operacionresta = true;
   boton0.mousePressed(value0v => {
      valor2 = 0;
      return valor2 ;
    })
    boton1.mousePressed(value1v => {
      valor2 = 1;
      return valor2 ;
    })
    boton2.mousePressed(value2v => {
      valor2 = 2;
      return valor2 ;
    })
    boton3.mousePressed(value3v => {
      valor2 = 3;
      return valor2 ;
    })
    boton4.mousePressed(value4v => {
      valor2 = 4;
      return valor2 ;
    })
    boton5.mousePressed(value5v => {
      valor2 = 5;
      return valor2 ;
    })
    boton6.mousePressed(value6v => {
      valor2 = 6;
      return valor2 ;
    })
    boton7.mousePressed(value7v => {
      valor2 = 7;
      return valor2 ;
    })
    boton8.mousePressed(value8v => {
      valor2 = 8;
      return valor2 ;
    })
    boton9.mousePressed(value9v => {
      valor2 = 9;
      return valor2 ;
    })
}

//--------------------------------------------------------------------------------------------------------------------------------

function valuemulti(botonmulti){

 operacionmulti = true;
   boton0.mousePressed(value0v => {
      valor2 = 0;
      return valor2 ;
    })
    boton1.mousePressed(value1v => {
      valor2 = 1;
      return valor2 ;
    })
    boton2.mousePressed(value2v => {
      valor2 = 2;
      return valor2 ;
    })
    boton3.mousePressed(value3v => {
      valor2 = 3;
      return valor2 ;
    })
    boton4.mousePressed(value4v => {
      valor2 = 4;
      return valor2 ;
    })
    boton5.mousePressed(value5v => {
      valor2 = 5;
      return valor2 ;
    })
    boton6.mousePressed(value6v => {
      valor2 = 6;
      return valor2 ;
    })
    boton7.mousePressed(value7v => {
      valor2 = 7;
      return valor2 ;
    })
    boton8.mousePressed(value8v => {
      valor2 = 8;
      return valor2 ;
    })
    boton9.mousePressed(value9v => {
      valor2 = 9;
      return valor2 ;
    })
}

//--------------------------------------------------------------------------------------------------------------------------------

function valuediv(botondiv){
   operaciondiv = true;
   boton0.mousePressed(value0v => {
      valor2 = 0;
      return valor2 ;
    })
    boton1.mousePressed(value1v => {
      valor2 = 1;
      return valor2 ;
    })
    boton2.mousePressed(value2v => {
      valor2 = 2;
      return valor2 ;
    })
    boton3.mousePressed(value3v => {
      valor2 = 3;
      return valor2 ;
    })
    boton4.mousePressed(value4v => {
      valor2 = 4;
      return valor2 ;
    })
    boton5.mousePressed(value5v => {
      valor2 = 5;
      return valor2 ;
    })
    boton6.mousePressed(value6v => {
      valor2 = 6;
      return valor2 ;
    })
    boton7.mousePressed(value7v => {
      valor2 = 7;
      return valor2 ;
    })
    boton8.mousePressed(value8v => {
      valor2 = 8;
      return valor2 ;
    })
    boton9.mousePressed(value9v => {
      valor2 = 9;
      return valor2 ;
    })

}

//--------------------------------------------------------------------------------------------------------------------------------

function valueigualdad(botonigualdad){

  if(operacionsuma === true){
   result = valor + valor2;
   return result 
 } 

   else if(operacionresta === true){
   result = valor - valor2;
   return result 


   }

   else if(operacionmulti === true){
      result = valor * valor2;
      return result 
   
    }

    else if(operaciondiv === true){
      result = valor / valor2;
      return result 
   
   
      }
   
    }

function valueclean(botonclean){

  if (operacionce === false){
   result = 0
   valor = 0
   valor2 = 0
   return result, valor, valor2
  }

}
//-----------------------------------------------------------------------------------------------------------------

