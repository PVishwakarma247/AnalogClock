let hr = document.getElementById('hours');
let min = document.getElementById('minutes');
let sec = document.getElementById('secands');

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30*hh +  mm/2;
  let mRotation = 6*mm;
  let sRotation = 6*ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
  digitalClock();
}
setInterval(displayTime, 1000);

let time = document.getElementById('dig');
let DATE = document.getElementById('displayDate');

function digitalClock() {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let D = date.getDate();
  let M = date.getMonth();
  let Y = date.getFullYear();

  time.innerText = `${hr} : ${min} : ${sec}`;
  DATE.innerText = `${D} /${M} /${Y}`;
}

// let date = new Date();
// let d = date.getDate();
// alert(`${d}`)

