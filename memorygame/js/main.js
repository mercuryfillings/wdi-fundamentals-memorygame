let cards = [
{
	rank: "Laura",
	suit: "Cubes",
	cardImage: "images/laura-of-cubes.png"
},
{
	rank: "Laura",
	suit: "Cones",
	cardImage: "images/Laura-of-Cones.png"
},
{
	rank: "Carl",
	suit: "Spheres",
	cardImage: "images/Carl-of-Spheres.png"
},
{
	rank: "Carl",
	suit: "Pyramids",
	cardImage: "images/Carl-of-Pyramids.png"
}
];
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
	console.log("User flipped " + cards[cardId].rank + ".");
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);