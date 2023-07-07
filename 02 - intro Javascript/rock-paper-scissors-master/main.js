import sweetalert2 from 'https://cdn.skypack.dev/sweetalert2';


document.querySelector('#rules').addEventListener('click', () => {
  sweetalert2.fire({
    title: 'Rules',
    html: '<img class="reglas_img" src="./images/image-rules.svg" alt="Rules">',
  });
})

const tablero = document.querySelector('#tablero');
const result = document.querySelector('#result');

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

const getWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Empate';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Perdiste';
    } else {
      return 'Ganaste';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Perdiste';
    } else {
      return 'Ganaste';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Perdiste';
    } else {
      return 'Ganaste';
    }
  }
}

const resultsStyles = (winnerchoice, choise) => {
  const styles = {
    rock: `
    <span id="user_picked" class="btn red">
      <strong>${winnerchoice}</strong>
      <img src="./images/icon-rock.svg" alt="rock">
    </span> 
    `,
    paper: `
    <span id="user_picked" class="btn blue">
      <strong>${winnerchoice}</strong>
      <img src="./images/icon-paper.svg" alt="paper">
    </span>
    `,
    scissors: `
    <span id="user_picked" class="btn yellow">
      <strong>${winnerchoice}</strong>
      <img src="./images/icon-scissors.svg" alt="scissors">
    </span>
    `,
  }
  return styles[choise];
}

let winerCount = 0
const showWinner = (winner, computerChoice, userChoice) => {  
  // ocutlar tablero
  tablero.classList.add('hidden');
  // mostrar resultado
  result.classList.remove('hidden');
  // mostrar ganador
  document.querySelector('#option-result p').textContent = winner;

  // mostrar eleccion del usuario
  document.querySelector('#user_picked').innerHTML = resultsStyles('YOU PICKED', userChoice);
  
  // mostrar eleccion de la maquina
  document.querySelector('#pc_picked').innerHTML = resultsStyles('THE HOUSE PICKED', computerChoice);
  
  // mostrar marcador
  if (winner === 'Ganaste') {    
    winerCount++;
    document.querySelector('#score_number').textContent = winerCount;
  }

}

const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const userOptions = [paper, scissors, rock];



userOptions.forEach(option => {
  option.addEventListener('click', (e) => {
    const userChoice = option.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);
    showWinner(winner, computerChoice, userChoice);

  });
})



const playAgain = document.querySelector('#option-result button');
playAgain.addEventListener('click', () => {
  tablero.classList.remove('hidden');
  result.classList.add('hidden');
});
