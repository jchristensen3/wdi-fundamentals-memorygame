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

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) { 
        console.log('You found a match!');
    } else {
        console.log('Sorry, try again.');
    }   
}
var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[0]);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);