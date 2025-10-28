//Create a function countWords(sentence) that counts how many words are in a string (separated by spaces).

function countWords (sentence) 
{
    let sentenceCount = 0;
    for (let i = 0; i < sentence.length; i++) 
    {
       if (sentence[i] != " " && sentence[i+1] == " ")     
       {
          sentenceCount = sentenceCount + 1
       } 
    }
    
    if (sentence[sentence.length - 1] == " ") 
        {
            return sentenceCount
        } else 
        {
             return sentenceCount + 1
        }
};

console.log(countWords("I like java script!"))