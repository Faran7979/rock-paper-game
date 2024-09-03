const Options = ["Rock", "Paper", "Scissors"];

const pValue = document.getElementById("userChoice");

let userScore = 0;
let computerScore = 0;

let botResult = "";

let timer;

let intervalID;

function botPlayer(arr) {
  const i = Math.floor(Math.random() * 3);

  let botStatus = "";

  switch (i) {
    case 0:
      botStatus = arr[0];
      break;
    case 1:
      botStatus = arr[1];
      break;
    case 2:
      botStatus = arr[2];
      break;
  }

  document.getElementById("compChoice").innerText = arr[i];
  setTimeout(() => alert("time out"), 15000);

  return botStatus;
}

function btnClicked(element) {
  clearInterval(intervalID);

  document.getElementById("timer").innerText = "";
  timer = 15;
  intervalID = setInterval(function () {
    timer--;
    if (timer == 0) {
      clearInterval(intervalID);
    }
    document.getElementById("timer").innerText = timer;
  }, 1000);

  const userChoice = pValue.innerText;

  document.getElementById("userChoice").innerText = element.innerText;

  botResult = botPlayer(Options);

  let gameStatus = false;

  console.log(botResult);

  if (pValue.innerText == botResult) {
    document.getElementById("gameStatus").innerText = "Draw";
    console.log("Draw");
  } else {
    if (pValue.innerText == "Scissors" && botResult == "Paper") {
      gameStatus = true;
    } else if (pValue.innerText == "Rock" && botResult == "Scissors") {
      gameStatus = true;
    } else if (pValue.innerText == "Paper" && botResult == "Rock") {
      gameStatus = true;
    }
    if (gameStatus == true) {
      document.getElementById("gameStatus").innerText = "You Won";
      userScore++;
      document.getElementById("player-score").innerText = userScore;
    } else {
      document.getElementById("gameStatus").innerText =
        "Game over:: Computer Won";
      computerScore++;

      document.getElementById("computer-score").innerText = computerScore;
    }
  }

  console.log(botResult);
}
