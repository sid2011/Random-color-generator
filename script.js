function generateColor(){
   let color="#"+Math.floor(Math.random()*16777215).toString(16);
   document.querySelector(".color-box").style.backgroundColor=color;
   document.getElementById("display").innerHTML=color;

}