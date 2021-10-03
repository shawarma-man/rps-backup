let buttons = document.querySelectorAll(".button");
const score_div = document.querySelector("#score");
const player_num = document.querySelector("#player_num");
const cpu_num = document.querySelector("#cpu_num");
const main = document.querySelector("#game_main");
const body = document.querySelector("#game_body");
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      playerSelection = img.alt.toLowerCase();
      playRound(playerSelection, computerSelection);
  
      if (playerScore === 5 || computerScore === 5) {
        declareWinner();
      }
    });
  });

  function cpu(){
    let random_num = Math.floor(Math.random()*3);
    //0=rock 1=paper 2=scissors
    console.log(random_num);
    return random_num;
  }

  function playRound(player, comp){
      comp = cpu();
      player = player.toLowerCase();
      if((player ==="rock" && comp == 2) || (player ==="paper" && comp == 0) || (player ==="scissors" && comp == 1)) {
        anime("win2.gif",3250);
        playerScore++;
        update();
    }
    else if((player ==="rock" && comp == 0) || (player ==="paper" && comp == 1) || (player ==="scissors" && comp == 2)) {
        
      anime("draw.gif",2150);
    }
    else {
        
      anime("lose1.gif",3250);
        computerScore++;
        update();
    }


  }
  function anime(source,time){
    let img = document.createElement('img');
    img.src = source+"?a="+Math.random();
    img.classList.add("img_anim");
    score_div.appendChild(img);

    setTimeout(function(){ img.remove(); }, time);
    // score_div.classList.add('win');
    // score_div.currentTime=0;
    // setTimeout(function(){ score_div.classList.remove('win'); }, 3260);
  }
  function update(){
    player_num.textContent=playerScore;
    cpu_num.textContent=computerScore;
  }

  function declareWinner(){
      if(playerScore>computerScore) {
        removeAllChildNodes(main);
        let end = document.createElement('div');
          end.setAttribute('id','end');
          let win_msg = document.createElement('p')
          let retry = document.createElement('button');
          retry.setAttribute('id','retry');
          retry.classList.add("fade-in");
          retry.textContent="Play Again";
          win_msg.setAttribute('id','end_msg');
          win_msg.classList.add("drop-down");
          win_msg.textContent="YOU WON!!"
          end.appendChild(win_msg);
          end.appendChild(retry);
          body.appendChild(end);
        
      }
      else{
          removeAllChildNodes(main);
          let end = document.createElement('div');
          end.setAttribute('id','end');
          let win_msg = document.createElement('p')
          let retry = document.createElement('button');
          retry.setAttribute('id','retry');
          retry.classList.add("fade-in");
          retry.textContent="Play Again";

          win_msg.setAttribute('id','end_msg');
          win_msg.classList.add("drop-down");
          win_msg.textContent="YOU LOST!"
          end.appendChild(win_msg);
          end.appendChild(retry)
          body.appendChild(end);

          
      }

      retry.addEventListener("click", () => {
        location.reload();
      });
  }
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}