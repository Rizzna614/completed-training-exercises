function countWords(sentence) {
  // Trim removes spaces at start and end
  // Split by one or more spaces using a regular expression
  // Filter removes empty strings if there are multiple spaces
  let words = sentence.trim().split(/\s+/);
  return words.length;
}

console.log(countWords("I am learning JavaScript"));      // → 4
console.log(countWords("   I   am   learning   JS   "));  // → 4