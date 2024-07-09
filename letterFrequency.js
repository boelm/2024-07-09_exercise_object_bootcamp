console.log("%cLetter Frequency", "font-weight:bold");

console.log(letterFrequency("kalle"));
console.log(letterFrequency("aaaa"));
console.log(letterFrequency("ni talar bra latin"));

//input en sträng, out an object
function letterFrequency(word) {
  let frequency = {};
  let wordArray = word.split("");
  for (letter in wordArray) {
    let isFirstTimeLetter = true;
    for (prop in frequency) {
      //Puhu, to write this expression!
      if (prop === String(`'${wordArray[letter]}'`)) {
        isFirstTimeLetter = false;
        frequency[`'${word[letter]}'`]++;
      }
    }
    if (isFirstTimeLetter) {
      frequency[`'${word[letter]}'`] = 1; //add letter and set to 1
    }
  }
  return frequency;
}

//Kod-skafferi
//console.log(String(prop).localeCompare(String(`'${wordArray[letter]}'`)));
//console.log(prop.localeCompare(wordArray[letter]));
