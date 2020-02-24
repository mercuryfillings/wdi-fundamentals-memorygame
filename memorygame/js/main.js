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

function flipCard() {
	let cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank + ".");
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

