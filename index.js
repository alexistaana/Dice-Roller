//RANDOMLY GENERATES A NUMBER AND CONVERTS TO DICE ROLL
function rollDice() {
    var dice = Math.floor((Math.random() * 6) + 1)

    return dice;
}


// FUNCTION TO DRAW BOTH THE DICES
function drawDice() {
    let rollFirst = rollDice();
    let rollSecond = rollDice();

    let diceOne = document.getElementById("dice-one");
    let diceTwo = document.getElementById("dice-two");


    if (rollFirst == 1) {
        diceOne.src = "images/dice1.png";
    } else if (rollFirst == 2) {
        diceOne.src = "images/dice2.png";
    } else if (rollFirst == 3) {
        diceOne.src = "images/dice3.png";
    } else if (rollFirst == 4) {
        diceOne.src = "images/dice4.png";
    } else if (rollFirst == 5) {
        diceOne.src = "images/dice5.png";
    } else if (rollFirst == 6) {
        diceOne.src = "images/dice6.png";
    }

    if (rollSecond == 1) {
        diceTwo.src = "images/dice1.png";
    } else if (rollSecond == 2) {
        diceTwo.src = "images/dice2.png";
    } else if (rollSecond == 3) {
        diceTwo.src = "images/dice3.png";
    } else if (rollSecond == 4) {
        diceTwo.src = "images/dice4.png";
    } else if (rollSecond == 5) {
        diceTwo.src = "images/dice5.png";
    } else if (rollSecond == 6) {
        diceTwo.src = "images/dice6.png";
    }
}


// FUNCTION TO ENABLE BUTTON TO ROLL THE DICE
function clickRoll() {

    let btnTarget = document.getElementById("roll-btn");
    btnTarget.onclick = function () {
        drawDice()
    };
}


clickRoll();
drawDice();