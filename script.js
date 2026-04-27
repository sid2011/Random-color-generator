function generateColor(){
   let color="#"+Math.floor(Math.random()*16777215).toString(16);
   console.log(color);
   document.querySelector(".color-box").style.backgroundColor=color;
}