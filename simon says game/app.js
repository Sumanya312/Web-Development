// press any key and game start
// btn flash and level up and add that btn num in gameseq
// user input and check user seq and game seq
// if not match then game over, screen color red, display score
// if match then step 2 repeat

// let btn = document.querySelector("#btn1");
// console.dir(btn);
// console.dir(btn.style);
// btn.style.backgroundColor = "white";

let started = false; // flag for 1st time game start
let level = 0;
let gameseq = [];
let userseq = [];
let h3 = document.querySelector("h3");
let maxscore = 0;
let highscore = document.querySelector("span");
let score = document.querySelector(".score");

highscore.innerHTML = maxscore;

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    setTimeout(levelUp, 500);
  }
});

let btns = document.querySelectorAll(".box");
for (let btn of btns){
  btn.addEventListener("click", btnPress);
}

function levelUp() {
  userseq = [];
  level++;
  let num = Math.floor(Math.random() * 3) + 1;
  let btn = document.querySelector(`.btn${num}`);
  
  gameseq.push(`btn${num}`);
  h3.innerHTML = `Level ${level}`;

  btnFlash(btn);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function btnPress(curridx) {
  btnFlash(this);
  userseq.push(this.id);
  checkSeq(userseq.length-1);    
}


function screenFlash() {
  let screen = document.querySelector("body");
  screen.classList.add("btn1");
  setTimeout(function () {
    screen.classList.remove("btn1");
  }, 200);
}

function checkSeq(idx) {
  if (gameseq[idx] === userseq[idx]){
    if(idx == level - 1){
        setTimeout(levelUp, 500);
    }
  }
  else{
    screenFlash();
    h3.innerHTML = `Game Over! Press any key to restart the game`;
    if(level-1 > maxscore)
      {
        maxscore = level-1;
        highscore.innerHTML = maxscore;

        score.classList.add("pop");
        setTimeout(function(){
          score.classList.remove("pop");
        }, 500);
      }
    
    

    level = 0;
    gameseq = [];
    started = false;
    
  }
}
