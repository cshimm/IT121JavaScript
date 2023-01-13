// Pig latin Generator
// Cameron Shimmin
// 1.13.23

// Grab user input
let userInput = prompt("Please enter a word");

// Reprompt if user input is empty
while (userInput.length === 0){
  userInput = prompt("Input cannot be empty. Please enter a word");
}
// split userInput by spaces (" "), force input to lower case
const splitInput = userInput.toLowerCase().split(" ");

// define vowels to check against
const vowels = "aeiouy";
let pigLatinTranslation = "";

// loop through the words in userInput and check if they start with a vowel, consenant or two consenants
splitInput.forEach(word => {
  let pigLatinWord = "";

  if (vowels.includes(word.substring(0, 1))) {
    //Starts with vowel
    pigLatinWord = word + "way";
  }
  else if (!vowels.includes(word.substring(1, 2))) {
    //Starts with two consenants
    const firstTwoLetters = word.slice(0, 2);
    const restOfWord = word.slice(2, word.length);

    pigLatinWord = restOfWord + firstTwoLetters + "ay";
  }
  else {
    // Starts with one consenant
    const firstLetter = word.slice(0, 1);
    const restOfWord = word.slice(1, word.length);

    pigLatinWord = restOfWord + firstLetter + "ay";
  }

  // Append result of pig latin translation to pig latin phrase
  pigLatinTranslation += (pigLatinWord + " ");
})
alert(`\"${userInput}\" translated into pig latin is: \"${pigLatinTranslation}\"`);