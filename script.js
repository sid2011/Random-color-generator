function generateColor(){
   let color="#"+Math.floor(Math.random()*16777215).toString(16);
   document.querySelector(".color-box").style.backgroundColor=color;
   document.getElementById("display").innerHTML=color;}
function searchGoogle(){
const searchQuery=document.getElementById("display").innerHTML;
const encodedQuery=encodeURIComponent(searchQuery);
const googleURL="https://www.google.com/search?q="+encodedQuery;
window.location.href=googleURL;
}