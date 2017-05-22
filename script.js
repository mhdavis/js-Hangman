var categories =
  {
    "80s Bands": ["blondie", "tears for fears", "the talking heads"],
    "Colors": ["red", "blue", "green", "violet"],
    "Jobs": ["policeman", "musician"]
  };


// plays out the full game
var playGame = () => {
  let answer = initiateAnswer(categories);
  let answerArr = answer.split("");
  let blankSpaceArr = generateBlankSpaces(answer);
  let userGuess;
  let alreadyGuessedLetters = [];
  let life = 2; // Should be 10 / set to 2 for testing purposes

  while (life > 0) {
    // prompt user for an answer
    let letter = prompt("enter a letter");
    let userIndexArr = getAllIndexes(answerArr, letter);
    alert("The user index arr is: " + userIndexArr);
    // if user letter occurs in the answer

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

    alert("Answer: " + answer);
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

// produces a answer in the form of  a string
var initiateAnswer = (obj) => {
    var keys = Object.keys(obj);
    var randomPropertyArr = obj[keys[ keys.length * Math.random() << 0]];
    var randomPropertyVal = randomPropertyArr[Math.floor(Math.random() * randomPropertyArr.length)];
    return randomPropertyVal;
};

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
