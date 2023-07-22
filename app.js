/* Created by Tivotal */

let progressBar = document.querySelector(".progress-bar");
let progressVal = document.querySelector(".progress-value");

let startVal = 0,
  endVal = 95;

//updating progress for every 100ms
let progress = setInterval(() => {
  startVal++;

  progressVal.textContent = `${startVal}%`;
  progressBar.style.background = `conic-gradient(#4070f4 ${
    startVal * 3.6
  }deg, #ededed 0deg)`;

  //stoppping process once start val is equal to end val
  if (startVal === endVal) {
    clearInterval(progress);

    document.querySelector(".text").textContent = "HTML CSS & JavaScript";
  }
}, 100);
