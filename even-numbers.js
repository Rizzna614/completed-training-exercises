//Write a function getEvenNumbers(numbersArray) that returns a new array containing only even numbers from the given array.

let evenNumbers = [];
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 10, 14, 16, 17, 19, 21];

function getEvenNumbers (numbersArray) 
{
   
   for (let i = 0; i <= numbersArray.length; i++) 
   {
       if (numbersArray[i] % 2 == 0) 
       {
          evenNumbers = evenNumbers + " " + numbersArray[i]
       }
   }
   
   return evenNumbers
};





console.log(getEvenNumbers(numbersArray))