console.time();

let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
  score = {
    win: 0,
    lose: 0,
    tie: 0
  }
}
document.querySelector('#point').innerHTML = "Wins:" + score.win + " Lose:" + score.lose + " Tie:" + score.tie;


function reset() {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;

  localStorage.removeItem('score');

  document.querySelector('#point').innerHTML = "Wins:" + score.win + " Lose:" + score.lose + " Tie:" + score.tie;

}

function Movebypc() {
  const computer = Math.floor(Math.random() * 3 + 1);
  let compMove = '';

  if (computer === 1) {
    compMove = 'Rock';
  } else if (computer === 2) {
    compMove = 'paper';
  } else if (computer === 3) {
    compMove = 'sisor';
  }

  return compMove;

}

function playGame(playerMove) {
  const compMove = Movebypc();


  if (playerMove === 'Rock') {
    if (compMove === 'Rock') {
      result = 'Tie';
    } else if (compMove === 'paper') {
      result = 'Lose';
    } else if (compMove === 'sisor') {
      result = 'Win';
    }
  } else if (playerMove === 'paper') {
    if (compMove === 'Rock') {
      result = 'Win';
    } else if (compMove === 'paper') {
      result = 'Tie';
    } else if (compMove === 'sisor') {
      result = 'lose';
    }

  } else if (playerMove === 'sisor') {
    if (compMove === 'Rock') {
      result = 'lose';
    } else if (compMove === 'paper') {
      result = 'Win';
    } else if (compMove === 'sisor') {
      result = 'Tie';
    }

  }

  if (result === 'Win') {
    score.win += 1;
  } else if (result === 'lose') {
    score.lose += 1;
  } else if (result === 'Tie') {
    score.tie += 1;
  }


  

  document.getElementById("show").innerHTML = "You picked:" + playerMove + "|Computer picked:" + compMove + "|You:" + result;

  document.getElementById("point").innerHTML = "Wins:" + score.win + " Lose:" + score.lose + " Tie:" + score.tie;

  document.getElementById("boxS").innerHTML = playerMove;
}

console.timeEnd();