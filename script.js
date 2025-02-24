

function fctchckb1(){

   if(document.getElementById("chckb1").checked){

    
      document.getElementById("b1").style.backgroundColor= "white";
      document.getElementById("b1").innerHTML= "NO CHNG";

      document.getElementById("btn1").disabled= true;
      document.getElementById("btn2").disabled= true; 
      document.getElementById("btn3").disabled= true;
      document.getElementById("coloptn1").disabled= true;

   }
   else{

      document.getElementById("b1").style.backgroundColor= "white";
      document.getElementById("b1").innerHTML= "CHNG COLOR";

      document.getElementById("btn1").disabled= false;
      document.getElementById("btn2").disabled= false; 
      document.getElementById("btn3").disabled= false;
      document.getElementById("coloptn1").disabled= false;
   }
}


function fctbtn1(){

    
   document.getElementById("b1").style.backgroundColor= "red";
   document.getElementById("b1").innerHTML="red";
   document.getElementById("b1").style.textAlign = "center";
}

function fctbtn2(){
  
   document.getElementById("b1").style.backgroundColor = "green";
   document.getElementById("b1").innerHTML = "green";
   document.getElementById("b1").style.textAlign = "center";
}

function fctbtn3(){

   

   document.getElementById("b1").style.backgroundColor= "blue";
   document.getElementById("b1").innerHTML="blue";
   document.getElementById("b1").style.textAlign = "center";
}

function fctbtn4(){

  
  var titi = document.getElementById("coloptn1").value;
  
   document.getElementById("b1").style.backgroundColor = titi;
}


function fctrngL()
{
   
   var toto = document.getElementById("rngL").value;
   document.getElementById("b1").style.width= toto + "px";
  
   
}

function fctrngH()
{
   var tata = document.getElementById("rngH").value;
   document.getElementById("b1").style.height= tata + "px";
}

function menu2()
{
  
   document.getElementById("coloptn1").style.display = "block";
   document.getElementById("aboutp").style.display = "block";

   document.getElementById("b1").innerHTML.style.display.disabled = true;

     
}

function test()
{
    alert("2291142@cmontmorency.qc.ca ou @nath.ess._");
}  

function aboutsec(){


if(document.getElementById("infoabout").style.display == "none")
{
   document.getElementById("infoabout").style.display = "block"; 
}else{
   document.getElementById("infoabout").style.display = "none";
   
  
}

}