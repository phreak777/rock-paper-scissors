// Variable declarations: computer selection and points, player selection and points, round winner
let compSel = '';
let compPoints = 0;
let playSel = '';
let playPoints = 0;
let roundWin = '';

// Simple instruction
console.log('To play, type "startGame()"');

// Computer random function, association to one of three strings (rock, paper, scissors)
function compPlay() {
    compRand = Math.floor(Math.random()*100)
    if (compRand <= 33) {
        compSel = 'Rock';
    } else if (compRand <= 66) {
        compSel = 'Paper';
    } else {
        compSel = 'Scissors';
    }
}

// Function to check who won
function checkMatch() {
    if (compSel === playSel) {
        roundWin = 'It\'s a tie, no points for anyone!'
    };

    if (
        (compSel === 'Rock' && playSel === 'Scissors') ||
        (compSel === 'Scissors' && playSel === 'Paper') ||
        (compSel === 'Paper' && playSel === 'Rock')
    ) {
        compPoints++;
        roundWin = 'Machine';
    };

    if (
        (playSel === 'Rock' && compSel === 'Scissors') ||
        (playSel === 'Scissors' && compSel === 'Paper') ||
        (playSel === 'Paper' && compSel === 'Rock')
    ) {
        playPoints++;
        roundWin = 'Player';
    };
}

// Function to start the game, prompt for user selection if both scores are under 3, validating player input to properly run
function startGame() {
    do {
        console.log('Asking...');
        playSel = prompt('Please type your selection between "Rock", "Paper", "Scissors", or "Exit" if you want to get outta here (all case sensitive): ');
        if (playSel === 'Exit'){
            break;
        } else if (playSel === 'Paper' || playSel === 'Rock' || playSel === 'Scissors'){
            console.log(`You wrote ${ playSel }`);
            compPlay();
            console.log(`The machine selected ${ compSel }!`)
            checkMatch();
            console.log(`The winner is ${ roundWin }!`);
            console.log(`Machine has ${ compPoints } points and Player has ${ playPoints }!`)
        } else {
                console.log('You must type your selection as shown in the question, it is case sensitive, so try again!');
            }
    } while (compPoints < 3 && playPoints < 3);
}
// End comment