let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ['stone', 'paper', 'scissor'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = `You chose ${playerChoice.toUpperCase()} | Computer chose ${computerChoice.toUpperCase()}`;

  if(playerChoice === computerChoice) {
    resultText += " → It's a Draw!";
  } else if(
    (playerChoice === 'stone' && computerChoice === 'scissor') ||
    (playerChoice === 'paper' && computerChoice === 'stone') ||
    (playerChoice === 'scissor' && computerChoice === 'paper')
  ) {
    playerScore++;
    resultText += " → You Win! 🎉";
  } else {
    computerScore++;
    resultText += " → Computer Wins! 🤖";
  }

  document.getElementById('player-score').innerText = `Player: ${playerScore}`;
  document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;
  document.getElementById('result').innerText = resultText;
}
