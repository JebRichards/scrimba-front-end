const squares = Array.from(document.querySelectorAll(".grid div"));
console.log("Hello");

//Challenge: We use what we have learnt in the previous three lessons in order
//to visually colour a game board in our browser. At the moment the board is empty.
//Please colour the squares, similar to like you would on a chess board using the
//for loop.

//Don't forget to share your code in the #share-your-code channel on discord.
for (let i = 0; i < squares.length; i++) {
	console.log(i);
	if (i % 2 === 0) {
		console.log(i);
		squares[i].classList.add("even");
	}
}
