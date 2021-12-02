// PASTE THESE IN WEB BROWSER CONSOLE AT https://adventofcode.com/2021/day/2/input

// FIRST TASK
(() => {
	const moves = document.querySelector("pre").textContent.toString().split('\n');
	let horizontalPos = 0;
	let depth = 0;
	for (let move of moves) {
		const direction = move.split(' ')[0];
		const value = parseInt(move.split(' ')[1]);
		if (direction.match('forward')) horizontalPos += value;
		if (direction.match('up')) depth -= value;
		if (direction.match('down')) depth += value;
	}
	console.log('Answer for the first one is', horizontalPos * depth);
})();

// SECOND TASK
(() => {
	const moves = document.querySelector("pre").textContent.toString().split('\n');
	let horizontalPos = 0;
	let depth = 0;
	let aim = 0;
	for (let move of moves) {
		const direction = move.split(' ')[0];
		const value = parseInt(move.split(' ')[1]);
		if (direction.match('forward')) {
			horizontalPos += value;
			depth += (aim * value);
		}
		if (direction.match('up')) aim -= value;
		if (direction.match('down')) aim += value;
	}
	console.log('Answer for the second one is', horizontalPos * depth);
})();
