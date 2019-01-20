function getRandomInt(limit){
    return Math.floor(Math.random() * limit);
}


function startGame(){

    var shipLoc1 = getRandomInt(6);
    var shipLoc2 = getRandomInt(6);
    var shipLoc3 = getRandomInt(6);
    
    var numberOfGuess =0;
    var numberOfHit = 0;
    var isSunk = false;
    //var guess;

    console.log("Ship location 1: " + shipLoc1);
    console.log("Ship location 2: " + shipLoc2);
    console.log("Ship location 3: " + shipLoc3);

    while (!isSunk){

        var guess = prompt("Enter a number from 0 to 5: ");

        if (guess < 0 || guess >5){
            alert("Invalid input!");
        }

        else{

            numberOfGuess++;
            console.log("Current number of guesses: " + numberOfGuess);

            if(guess == shipLoc1 || guess == shipLoc2 || guess == shipLoc3){
                numberOfHit++;
                console.log("Current number of hit: " + numberOfHit);
                alert("You hit the enemy ship!");
            }
            else{
                alert("You miss the enemy ship");
            }

            if (numberOfHit ==3){
                alert("Congrats, you sunk the enemy ship!");
                isSunk = true;
            }
        }

    }
}