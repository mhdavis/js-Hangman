$(document).ready(function() {
  const categories = [
    {
      "hint": "80's Bands",
      "guesswords": ["blondie", "tears for fears", "the talking heads", "michael jackson"]
    },
    {
      "hint": "Colors",
      "guesswords": ["red", "blue", "green", "violet"]
    },
    {
      "hint": "Jobs",
      "guesswords": ["policeman", "musician", "firefighter", "artist"]
    }
  ];


  $(".refresh-button").on("click", playGame());
  playGame();

  // plays out the full game
  function playGame () {
    $("#win-block").hide();
    $("#lose-block").hide();
    $("main-container").show();

    // Declares all variables needed for function;
    let randNum1 = Math.floor(Math.random() * categories.length);
    let randNum2 = Math.floor(Math.random() * categories[randNum1].guesswords.length);

    let randomCategory = categories[randNum1];
    let hint = randomCategory.hint;
    $("#hint").html("'" + hint + "'");

    let answer =  randomCategory.guesswords[randNum2];
    let answerArr = answer.split("");

    let blankSpaceArr = generateBlankSpaces(answer);

    let userGuess = blankSpaceArr.join("");
    $("#guess-word").html("'" + userGuess + "'");

    let alreadyGuessedLetters = [];

    let lives = 10;
    $("#lives").html("'" + lives + "'")

    let match = false;


    // while player has lives left and has NOT guessed the correct full word
    while (lives !== 0) {

      // first check if the user's guess from the previous iteration of the
      // while loop is the same as the answer
      if (userGuess === answer) {
        match = true;
        break;
      }

      // otherwise,
      // ask the player for a letter
      let letter =
      $('#submit-button').on('click', function() {
        $('#player-input').val();
      });


      // if player inputs one letter
      if (typeof letter === "string" && letter.length === 1) {

        // determine all the instances that letter occurs in the answer
        let userIndexArr = getAllIndexes(answerArr, letter);

        // if the letter the player inputed DOES occur at least once in the answer
        if (userIndexArr.length > 0) {
          // update the blank spaces of the the blank array to show the letter in
          // its proper spot relative to the answer
          for (var j=0; j < userIndexArr.length; j++) {
            blankSpaceArr[userIndexArr[j]] = letter;
          } // end for loop
          userGuess = blankSpaceArr.join("");

        } else {
          // if the letter the player guessed is NOT in the answer
          if (alreadyGuessedLetters.indexOf(letter) === -1) {
            // add that letter to an array of already guessed letters not found in the answer
            alreadyGuessedLetters.push(letter);
            // and take away one life
            lives--;
          } // end if statement
        } // end else statement


      } else {
        alert("Please enter one lowercase letter as your guess");
      } // end else statement
    } // end while loop

    // if the player runs out of lives
    if (lives === 0) {
      // tell the GAME OVER!
      $("#win-block").hide();
      $("#lose-block").show();
      $("main-container").hide();
    // Otherwise, if their guess matches the answer, tell the player they WON!
    } else if (match === true) {
      $("#win-block").show();
      $("#lose-block").hide();
      $("main-container").hide();
    } // end else if statment

  } // end playGame function

  //---------------------------------------------------------------------------

  /*
  getAllIndexes function

  takes an array and a value and determines if the instances of that value
  in the given array. Then returns an array of the indexes in which that
  value appeared in the provided array.
  */

  function getAllIndexes (arr, val) {
    var indexes = [];
    var i;
    for (i=0; i < arr.length; i++) {
      if (arr[i] === val) {
        indexes.push(i);
      }
    }
    return indexes;
  }

  /*
  generateBlankSpaces function

  Takes a string and subsitutes any characters in the string that are NOT
  spaces with an underscore. Returns an array of the string with only underscores
  and spaces.
  */

  function generateBlankSpaces (str) {
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

  //----------------------------------------------------------------------------

}):// end document.ready function