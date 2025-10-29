//Write a function rollDice(n) that simulates rolling a six-sided die n times, printing each result and returning the total sum.

function rollDice(n) 
{
   let sixSidedDieSum = 0
   let rolls = [];
   let roll = 0;
    for (let i = 1; i <= n; i++) 
        {
            //let roll = 0;
            let randomNumber = Math.random(); //Labak sita neka katra if/else if likt Math.random, jo tad vini katru if jaunu skaitli nem bet sita uz visiem if ir viens skaitlis kas ir truly random
            if (randomNumber <= 1/6) 
                {
                    roll = 1
                } else if (randomNumber <= 2/6) 
                {
                    roll = 2
                } else if (randomNumber <= 3/6) 
                {
                   roll = 3
                } else if (randomNumber <= 4/6) 
                {
                    roll = 4
                } else if (randomNumber <= 5/6) 
                {
                   roll = 5
                } else
                {
                   roll = 6
                }
                console.log(roll)
                sixSidedDieSum += roll
                rolls = rolls + roll + ", "
        }
    console.log ("Rezultāts: " + rolls)
    console.log ("Kopējā summa: " + sixSidedDieSum)
    return roll
};


console.log(rollDice(4));

console.log("-------------Seperate----------------")



//Create a program that simulates two players rolling one die each round.
//After both roll, the program prints who wins, or if it’s a draw. (do this in this file below these comments)

function playDiceGame () 
{
    let player1 = 0;
    let player2 = 0;

    player1 = rollDice(1)
    console.log("-------------Seperate----------------")
    player2 = rollDice(1)
    console.log("-------------Seperate----------------")

    if (player1 > player2) 
        {
            console.log("Player1 rolled: " + player1)
            console.log("Player2 rolled: " + player2)
            console.log("Player1 Wins!")
        } else if (player2 > player1)
            {
            console.log("Player1 rolled: " + player1)
            console.log("Player2 rolled: " + player2)
            console.log("Player2 Wins!")  
            } else 
                {
                   console.log("Player1 rolled: " + player1)
                   console.log("Player2 rolled: " + player2)
                   console.log("Draw!") 
                }
};

console.log(playDiceGame());

//console.log("-------------Seperate----------------");

//for (let round = 1; round <= 5; round++) {
    //console.log("Round " + round);                       if you wanna make rounds system
    //playDiceGame();
//}
