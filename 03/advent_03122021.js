// PASTE THESE IN WEB BROWSER CONSOLE AT https://adventofcode.com/2021/day/3/input

// FIRST TASK
(() => {
	let diagnostics = document.querySelector("pre").textContent.split('\n');
	const binaryLength = diagnostics[0].length;
	let gammaRate = "";
	let epsilonRate = "";

	for (let i = 0; i < binaryLength; i++) {
		let zeros = 0;
		let ones = 0;
		for (let j = 0; j < diagnostics.length; j++) {
			parseInt(diagnostics[j].charAt(i)) === 0 ? zeros++ : ones++;
		}
		zeros > ones ? gammaRate += "0" : gammaRate += "1";
	}
	for (let k = 0; k < gammaRate.length; k++) {
		gammaRate.charAt(k) === "1" ? epsilonRate+="0" : epsilonRate+="1";
	}
    const answer = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
	console.log('Answer for the first task is', answer);
})();

// SECOND TASK
(() => {
	const findValues = (getOxygenRating) => {
		let filteredDiagnosticReports = document.querySelector("pre").textContent.split('\n')
		for (let i = 0; i < 12; i++) {
			if (filteredDiagnosticReports.length === 1) break;
			let startsWithOne = [], startsWithZero = [];

			for (const diagnostic of filteredDiagnosticReports) {
				diagnostic.charAt(i) == "1" ?
                    startsWithOne.push(diagnostic) :
                    startsWithZero.push(diagnostic);
			}

            const moreOrEqualAmountOfOnes = startsWithOne.length >= startsWithZero.length;
			
            getOxygenRating
                ? moreOrEqualAmountOfOnes ? filteredDiagnosticReports = startsWithOne : filteredDiagnosticReports = startsWithZero
                : moreOrEqualAmountOfOnes ? filteredDiagnosticReports = startsWithZero : filteredDiagnosticReports = startsWithOne;
		}
		return filteredDiagnosticReports;
	} 
	const answer = parseInt(findValues(true), 2) * parseInt(findValues(false), 2);
	console.log('Answer for the second task is', answer);
})();
