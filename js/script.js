const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
score = 0;
const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

function updateScore(score) {
  scoreCont.innerHTML = "Your Score: " + score
}

const loop = setInterval(() => {
  
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 80){
    if(marioPosition < 80){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.src = './assets/images/game-over.png';
    clearInterval(loot)
    };
  };
  score += 1;
  updateScore(score);
},);
document.addEventListener('keydown', jump);