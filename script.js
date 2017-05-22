var categories =
  {
    "80s Bands": ["Blondie", "Tears for Fears", "The Talking Heads"],
    "Colors": ["Red", "Blue", "Green", "Violet"],
    "Jobs": ["Policeman", "Musician"]
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
    let UserIndexArr = getAllIndexes(answerArr, letter);
    // if user letter occurs in the answer
    if (UserIndexArr.length > 0) {
      for (i=0; i < answerArr.length; i++) {
        for (j=0; j < UserIndexArr.length; j++) {
          blankSpaceArr[i] = answerArr[UserIndexArr[j]];
        } // end inner for loop
      } // end outter for loop

      userGuess = blankSpaceArr.join("");
      alert("you enter while's if statement");

    } else {
      alert("you entered whiles else statement");
      alreadyGuessedLetters.push(letter);
      life--;
    }

    alert("Answer:" + answer);
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
  var wordArr = str.split("");
  var blanksArr = [];
  for (i=0; i < wordArr.length; i++) {
    if (wordArr[i] === " ") {
      blanksArr.push[" "];
    } else {
      blanksArr.push["_"];
    }
  }
  return blanksArr;
};

playGame();
