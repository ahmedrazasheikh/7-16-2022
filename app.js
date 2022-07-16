var nm = prompt("Enter Your Name???")
console.log(nm)
var numChars = nm.length;
 for (var i = 0; i < numChars; i++) {
 if (nm.slice(i, i + 2) === " ") {
 alert("No double spaces!");
break;
 }}

const a = document.querySelector(".ht")
console.log(a)

const b = document.querySelectorAll("button")
console.log(b)

const coinA = ["Head","Tail"]
  var score = [0,0]

for (var i = 0; i < b.length; i++) {
    console.log(b[i].innerText);
    b[i].addEventListener("click",myFunction)

}
function myFunction(e){
    var playerG = e.target.innerText
   document.getElementById("score1").innerText = "Player  : " + " " + playerG + score[0]
   var k =   Math.floor(Math.random()*2)
   var computerS = coinA[k]
   document.getElementById("score2").innerText = "Ai  :"  + " "  +  computerS  + score[1]
    // console.log("Computer Selected",coinA[k])

var output;

if(playerG == computerS ){
 
    output = "Player Wins"
    score[0]++


    alert("Player Wins")
}
else{
    output = "Computer Wins"
  score[1]++
  alert("Computer Wins")

}
}








// 
// 