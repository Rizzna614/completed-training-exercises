////Write a function rollDice(n) that simulates rolling a six-sided die n times, printing each result and returning the total sum.

function rollDice(n) 
{
  let sum = 0;

  for (let i = 0; i < n; i++) 
  {
    let roll = Math.floor(Math.random() * 6) + 1;   
    console.log(roll);
    sum += roll;
  }

  return "Kopējā summa: " + sum;
}

console.log(rollDice(4));