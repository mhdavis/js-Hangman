$(document).ready(function () {

  // Catergories and guesswords
  const categories = [
    {
      "hint": "80's Bands and Musicians",
      "guesswords": ["blondie", "tears for fears", "the talking heads", "michael jackson",
        "prince", "madonna", "the smiths", "a flock of seagulls", "duran duran", "oingo boingo",
        "men at work", "hall and oates", "the bangles", "foreigner", "pat benetar", "the outfield",
        "simple minds", "journey", "cyndi lauper"]
    },
    {
      "hint": "Colors",
      "guesswords": ["red", "blue", "green", "violet", "cerulean", "cyan", "fuschia", "chartreuse",
    "lavender", "pink", "indigo", "grey", "black", "gold"]
    },
    {
      "hint": "Occupations",
      "guesswords": ["policeman", "musician", "firefighter", "artist", "painter", "software developer",
    "teacher", "athlete", "astronaut", "professor", "crossing guard", "school principle", "janitor",
    "security guard", "banker", "financial manager", "stock broker", "president", "governor", "congressman",
    "actor", "graphic designer"]
    }
  ];

  // Refresh button to restart game
  $('.refresh-button').on("click", startGame);


  function startGame () {

    $("#win-block").hide();
    $("#lose-block").hide();
    $("#main-container").show();

    // Declares all variables needed for function and displays stats in html
    let randNum1 = Math.floor(Math.random() * categories.length);
    let randNum2 = Math.floor(Math.random() * categories[randNum1].guesswords.length);
    let randomCategory = categories[randNum1];

    let hint = randomCategory.hint;
    $("#hint").html(hint);

    let answer =  randomCategory.guesswords[randNum2];
    let answerArr = answer.split("");

    let blankSpaceArr = generateBlankSpaces(answer);

    let userGuess = blankSpaceArr.join("");
    $("#guess-word").html(userGuess);

    let alreadyGuessedLetters = [];
    $('#incorrect-letters').html(alreadyGuessedLetters);

    let lives = 10;
    $("#lives").html(lives);


    $('#submit-button').on('click', function () {

      // user is submits a letter
      let letter = $('#player-input').val();
      $('#player-input').val('');


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
          $("#guess-word").html(userGuess);

          if (userGuess === answer) {

            $(".win-answer").html(userGuess);
            $("#win-block").show();
            $("#lose-block").hide();
            $("#main-container").hide();
            lives = 2;
            alreadyGuessedLetters = [];
            $("#submit-button").off('click');
            return false;

          }

        } else {

          // if the letter the player guessed is NOT in the answer
          if (alreadyGuessedLetters.indexOf(letter) === -1) {
            // add that letter to an array of already guessed letters not found in the answer
            alreadyGuessedLetters.push(letter);

            if (alreadyGuessedLetters.indexOf(letter) === 0) {
              $('#incorrect-letters').append(letter);
            } else {
              $('#incorrect-letters').append(", " + letter);
            } // end else statement

            lives--;
            $("#lives").html(lives);

            if (lives === 0) {

              $(".win-answer").html(answer);
              $("#win-block").hide();
              $("#lose-block").show();
              $("#main-container").hide();
              lives = 2;
              alreadyGuessedLetters = [];

              $("#submit-button").off('click');
              return false;

            } // end if statement
          } // end if statement
        } // end else statement


      } else {
        alert("Please enter one lowercase letter as your guess");
      } // end else statement
    }); // end submit click event
  } // end startGame function

startGame();

//---------------------------------------------------------------------------

  /*
  FUNCTION: getAllIndexes

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
  FUNCTION: generateBlankSpaces

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

}); // end document.ready function
