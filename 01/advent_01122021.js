// PASTE THESE IN WEB BROWSER CONSOLE AT https://adventofcode.com/2021/day/1/input

// FIRST TASK
(() => {
	const measurements = document.querySelector("pre").textContent.split('\n').map(Number);
	let answer = 0;
	for (let i = 0; i < measurements.length; i++) {
		if (measurements[i] > measurements[i-1]) answer++;
	}
	console.log('Answer for the first task is', answer);
})();

// SECOND TASK
(() => {
	const measurements = document.querySelector("pre").textContent.split('\n').map(Number);
	let answer = 0;
	let windowSum = 0;
	for (let i = 0; i < measurements.length; i++) {
		let window = [measurements[i-1], measurements[i], measurements[i+1]];
		if (window.includes(undefined)) continue;
		let newWindowSum = window.reduce((total, num) => total + num);
		if (windowSum != 0 && windowSum < newWindowSum) answer++;
   		windowSum = newWindowSum;
	}
	console.log('Answer for the second task is', answer);
})();
