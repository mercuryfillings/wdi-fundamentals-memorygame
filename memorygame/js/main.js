let cards = ["Laura", "Laura", "Carl", "Carl"];
let cardsInPlay = [];

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
			}
	else {
		alert("DID I DO THAT?");
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId] + ".");
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);