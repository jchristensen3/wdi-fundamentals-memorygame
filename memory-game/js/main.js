console.log("Up and running!");

var cardOne = "queen"
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardThree);
console.log("User flipped " + cardFour);

var cards=["queen", "queen", "kimg", "king"];

var cardsInPlay=[];

var cardOne=[0];
cardsInPlay.push('cardOne');

console.log("User flipped queen");

var cardTwo=[1];
cardsInPlay.push('cardTwo');

console.log("User flipped queen");

var cardThree=[2];
cardsInPlay.push('cardThree');

var cardFour=[3];
cardsInPlay.push('cardFour');

console.log("User flipped queen");

console.log("User flipped king");


 if (cardsInPlay.length === 2) { 
 console.log("you have selected two cards"); 
 if (cardsInPlay[0] === cardsInPlay[1]) 
 alert("You found a match!"); 
 else alert("Sorry, try again");