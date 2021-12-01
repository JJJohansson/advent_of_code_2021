// PASTE THESE IN WEB BROWSER CONSOLE AT https://adventofcode.com/2021/day/1/input

// FIRST TASK
(() => {
	let measurements = document.querySelector("pre").textContent.toString().split('\n').map(Number);
	let answer = 0;

	for (let i = 0; i < measurements.length; i++) {
		if (measurements[i] > measurements[i-1]) {
			answer++;
		}
	}

	console.log('Answer for the first one is', answer);
})();

// SECOND TASK
(() => {
	let measurements = document.querySelector("pre").textContent.toString().split('\n').map(Number);
	let answer = 0;
	let oldWindowSum = 0;

	for (let i = 1; i < measurements.length-2; i++) {
		let windowSum = measurements[i-1] + measurements[i] + measurements[i+1];
		if (oldWindowSum != 0 && oldWindowSum < windowSum) answer++;
   	oldWindowSum = windowSum;
	}

	console.log('Answer for the second one is', answer);
})();