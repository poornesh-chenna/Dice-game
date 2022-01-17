var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomdice ="images/" + "dice" + randomnumber1 + ".png";
var randomdice2 ="images/" + "dice" + randomnumber2 + ".png";

console.log(randomdice);
document.querySelectorAll("img")[0].setAttribute("src",randomdice);
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);
if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "draw";
}
