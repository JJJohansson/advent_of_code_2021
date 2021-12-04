// PASTE THESE IN WEB BROWSER CONSOLE AT https://adventofcode.com/2021/day/4/input

// FIRST TASK
(() => {
    const rawInput = document.querySelector("pre").textContent.split('\n');
      const drawnNumbers = rawInput[0].slice().split(',').map(Number);
    rawInput.splice(0, 2); // slice away stuff we dont need for slips
    let bingoSlips = [];
    let temp = [];
    
    for (const line of rawInput) {
      if (line === "")  continue;
  
      const rows = line.split(' ');
        console.log(rows)
    }
  })();
  