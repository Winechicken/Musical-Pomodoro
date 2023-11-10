const timerDisplay = document.querySelector('#timerTime');
const startBtn = document.querySelector('#startBtn');
const startImg = document.querySelector('#startImg')
const plusBtn = document.querySelector('#plusBtn')
const minusBtn = document.querySelector('#minusBtn')
const backBtn = document.querySelector('#backBtn')

const backVideo = document.querySelector('#backVideo')
const sound = document.querySelector('#sound')

let timeLeft = 1200;
let timerId;

function showTimeInBlock(){
  let minutes = Math.floor(timeLeft/60);
  let seconds = timeLeft%60;
  if(minutes<10){
    minutes='0'+minutes;
  }
  if(seconds<10){
    seconds='0'+seconds;
  }
  timerDisplay.textContent = `${minutes}:${seconds}`;
}
showTimeInBlock();


let timerGo = false;
startBtn.addEventListener('click', () => {
  if (!timerGo){
    backBtn.style.display = "none";
    startImg.src = 'classic assets/pause-white.png';
    StartTimer();
    timerId = setInterval(StartTimer, 1000);
    backVideo.play();
    sound.play();
    }
  else{
    backBtn.style.display = "block";
    startImg.src = 'classic assets/play-white.png';
    clearInterval(timerId)
    backVideo.pause();
    sound.pause();
    }
  timerGo = !timerGo;
})

function StartTimer(){
  showTimeInBlock();
  timeLeft--;
  if(timeLeft<0){
    clearInterval(timerId);
    timeLeft=0;
    backVideo.pause();
    sound.pause();
  }
}

function plusTime() {
  timeLeft += 60;
  showTimeInBlock();
}

function minusTime() {
  if (timeLeft >= 60) {
    timeLeft -= 60;
    showTimeInBlock();
  }
}
plusBtn.addEventListener("click", plusTime);
minusBtn.addEventListener("click", minusTime);
