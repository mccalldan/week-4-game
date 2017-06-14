var lowEnd = 1;
var highEnd = 12;
var lowRandom = 19;
var highRandom = 120;
var crystal1 = [1];
var crystal2  ;
var crystal3 ;
var crystal4 ;
var crystalNumber = [];
var randomNumber = [];
var crystal1;
var crystal2;
var crystal3;
var crystal4;
  
// while(lowEnd <= highEnd){
//    arr.push(lowEnd++);
// }
for ( i=19; i <= 120; i++) {
  randomNumber.push(i)
}
console.log(randomNumber)

for ( i=1; i <= 4; i++) {
  randomCrystal = Math.floor(Math.random() * 12) + 1
  crystalNumber.push(randomCrystal)
}
console.log(crystalNumber)
// $(".crystal-1").on("click", function() {
  
// }

// $(".crystal-2").on("click", function() {

// }

// $(".crystal-3").on("click", function() {

// }

// $(".crystal-4").on("click", function() {

// }