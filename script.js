/*
BUGS THAT NEED FIXING
-need to not have repeats in 'already guessed letters'
-need ot include the value of first letter in user guess
*/

const categories = [
  {
    "hint": "80's Bands",
    "guesswords": ["blondie", "tears for fears", "the talking heads"]
  },
  {
    "hint": "Colors",
    "guesswords": ["red", "blue", "green", "violet"]
  },
  {
    "hint": "Jobs",
    "guesswords": ["policeman", "musician"]
  }
];


// plays out the full game
var playGame = () => {
  let randNum1 = Math.floor(Math.random() * categories.length);
  let randNum2 = Math.floor(Math.random() * categories[randNum1].guesswords.length);

  let randomCategory = categories[randNum1];
  console.log("Random Category: " + randomCategory);

  let hint = randomCategory.hint;
  console.log("hint: " + hint);

  let answer =  randomCategory.guesswords[randNum2];
  let answerArr = answer.split("");
  let blankSpaceArr = generateBlankSpaces(answer);
  let userGuess;
  let alreadyGuessedLetters = [];
  let life = 2; // Should be 10 / set to 2 for testing purposes

  console.log("Answer: " + answer);
  console.log("------------------------")

  while (life > 0) {
    let letter = prompt("enter a letter");
    let userIndexArr = getAllIndexes(answerArr, letter);
    console.log("index array: " + userIndexArr);

    if (userIndexArr.length > 0) {
      for (j=0; j < userIndexArr; j++) {
        blankSpaceArr[userIndexArr[j]] = letter;
      }

      userGuess = blankSpaceArr.join("");
      console.log("userGuess: " + userGuess);

    } else {
      alreadyGuessedLetters.push(letter);
      life--;
    }

    console.log("User guess: " + userGuess);
    console.log("Already Guessed Letters: " + alreadyGuessedLetters);
    console.log("Lives: " + life);
  } // end while loop

  if (life === 0) {
    alert("Game Over! You Lose");
  } else {
    alert("Congratulations! You Won")
  }
}

var getAllIndexes = (arr, val) => {
  var indexes = [];
  var i;
  for (i=0; i < arr.length; i++) {
    if (arr[i] === val) {
      indexes.push(i);
    }
  }
  return indexes;
}


var generateBlankSpaces = (str) => {
  var blankArr = [];
  var splitted = str.split("");

  for (i=0; i < splitted.length; i++) {
    if (splitted[i] === " ") {
      blankArr.push(" ");
    } else {
      blankArr.push("_");
    }
  }

  return blankArr;
};

playGame();
