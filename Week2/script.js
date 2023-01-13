// Pig latin Generator
// Cameron Shimmin
// 1.13.23

// Grab user input, force input to lower case
let userInput = prompt("Please enter a word").toLowerCase();

// Reprompt if user input is empty
while (userInput.length === 0){
  userInput = prompt("Input cannot be empty. Please enter a word").toLowerCase();
}
// split userInput by spaces (" ")
const splitInput = userInput.split(" ");

// define vowels to check against
const vowels = "aeiouy";
let pigLatinPhrase = "";

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
    let restOfWord = word.slice(2, word.length);

    pigLatinWord = restOfWord + firstTwoLetters + "ay";
  }
  else {
    // Starts with one consenant
    const firstLetter = word.slice(0, 1);
    let restOfWord = word.slice(1, word.length);

    pigLatinWord = restOfWord + firstLetter + "ay";
  }

  // Append result of pig latin translation to pig latin phrase
  pigLatinPhrase += (pigLatinWord + " ");
})
alert(userInput);
alert(pigLatinPhrase);