//Create a function reverseName(name) that prints your name backwards.
//Don’t use .reverse() — do it manually.

function reverseName (name) 
{
   let letters = [];
    for (i = name.length - 1; i >= 0; i--) 
    {
        letters = letters + name[i]
    }
   return letters
};

console.log(reverseName("Roberts"));
console.log(reverseName("Anna"));