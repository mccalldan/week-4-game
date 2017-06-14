$( document ).ready(function() {


var crystalNumber = [];
var randomNumber = [];
var score = 0;
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
 $(".crystal-1").on("click", function() {
  crystal1 = crystalNumber[0]
  score = score + crystal1
  console.log('score:', score)
 })

 $(".crystal-2").on("click", function() {
  crystal2 = crystalNumber[1]
  score = score + crystal2
  console.log('score:', score)
 })

 $(".crystal-3").on("click", function() {
  crystal3 = crystalNumber[2]
  score = score + crystal3
  console.log('score:', score)
 })

 $(".crystal-4").on("click", function() {
  crystal4 = crystalNumber[3]
  score = score + crystal4
  console.log('score:', score)
 })


})