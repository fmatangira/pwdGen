var newPwd;

function generatePassword() {
  var pwdPoss = {
    special_chars: ["@", "!", "#", "$", "%", "&", "+", "?", "<", ">", "^", ":", ";", "~"],
    num_chars: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    lower_chars: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upper_chars: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  };

  var pwdkeys = ["special_chars", "num_chars", "lower_chars", "upper_chars"];

  // SET UP THE PROMPTS
  var quPrompt;
  var scPrompt;
  var ncPrompt;
  var lwPrompt;
  var upPrompt;

  var prompts = {
    quFunc: function() {
      quPrompt = parseInt(prompt("How many characters would you like your password to have?"), 10);

      while (Number.isInteger(parseInt(quPrompt)) === false) {
        alert("Your entry is invalid. Please enter a number");
        quPrompt = parseInt(prompt("How many characters would you like your password to have?"), 10);
      }
    },

    scFunc: function() {
      scPrompt = prompt("Would you like to have special characters in your password? Enter Y for Yes, and N for No.");
      return scPrompt;
    },

    ncFunc: function() {
      ncPrompt = prompt("Would you like to have numbers in your password? Enter Y for Yes, and N for No.");
      return ncPrompt;
    },

    lwFunc: function() {
      lwPrompt = prompt("Would you like to have lowercase letters in your password? Enter Y for Yes, and N for No.");
      return lwPrompt;
    },

    upFunc: function() {
      upPrompt = prompt("Would you like to have uppercase letters in your password? Enter Y for Yes, and N for No.");
      return upPrompt;
    }

  };

  // CALL QUANTITY FUNCTION
  prompts.quFunc();

  // CREATE ARRAY WHERE PROMPT INPUTS WILL BE STORED
  var promptArray = [quPrompt];

  // CREATE LOOP THAT VALIDATES "Y" OR "N" FOR THE RESET OF THE PROMPTS
  for (var i = 1; i < Object.keys(prompts).length; i++) {

    var sc_nc_lw_up_prompts = Object.keys(prompts)[i];

    var userInput = prompts[sc_nc_lw_up_prompts]();

    promptArray.push(userInput.toLowerCase());

    while (promptArray[i] !== "y" && promptArray[i] !== "n") {

      alert("Invalid Entry. Your entry must be a Y for Yes, or N for No. Please try again.");
      promptArray.pop();
      userInput = prompts[sc_nc_lw_up_prompts]();
      promptArray.push(userInput.toLowerCase());

    }

  }

  // CREATE ARRAY FOR PASSWORD CHARACTER POSSIBILITIES BASED ON USER INPUT FROM PROMPTS
  var pwdArray = [];

  // CREATE FUNCTIONS TO PUSH ARRAYS FROM LINES 2-5 INTO pwdArray
  var pwdChoice = {

    special_chars: function() {
      if (promptArray[1] === "y") {
        Array.prototype.push.apply(pwdArray, pwdPoss.special_chars);
      }
    },

    num_chars: function() {
      if (promptArray[2] === "y") {
        Array.prototype.push.apply(pwdArray, pwdPoss.num_chars);
      }
    },

    lower_chars: function() {
      if (promptArray[3] === "y") {
        Array.prototype.push.apply(pwdArray, pwdPoss.lower_chars);
      }
    },

    upper_chars: function() {
      if (promptArray[4] === "y") {
        Array.prototype.push.apply(pwdArray, pwdPoss.upper_chars);
      }
    }
  };

  // RUN ABOVE FUNCTIONS
  pwdChoice.special_chars();
  pwdChoice.num_chars();
  pwdChoice.lower_chars();
  pwdChoice.upper_chars();

  // CREATE ARRAY WHERE FINAL PASSWORD WILL GENERATE INTO
  var pwdGen = [];

  // LOOP THROUGH pwdArray AND PUT THE RANDOM CHOSEN CHARACTERS IN pwdGen
  for (i = 0; i < promptArray[0]; i++) {
    pwdChar = pwdArray[Math.floor(Math.random() * (pwdArray.length))];
    pwdGen.push(pwdChar);
  }

  newPwd = pwdGen.join("");
}

// LET THE GENERATE PASSWORD BUTTON PUT newPwd IN INPUT BOX FROM HTML
var genPwd = document.querySelector("#createPwd");
var textPwd = document.getElementById("pwdInput");

genPwd.addEventListener("click", function(event) {
  event.preventDefault();

  textPwd.value = "";
  document.getElementById("copyAlert").value = "";

  generatePassword();
  // textPwd.innerText = newPwd;
  textPwd.value = newPwd;
});

// LET THE COPY BUTTON COPY THE PASSWORD FROM THE TEXT FIELD
var copyBtn = document.querySelector("#copyPwd");
var copyNotification = document.querySelector("#copyAlert");

function copyPwd() {
  textPwd.select();
  document.execCommand("copy");
}

copyBtn.addEventListener("click", function(event) {
  event.preventDefault();

  copyPwd();
  var notifcationText = "The password has been copied!";
  copyNotification.innerText = notifcationText;
});
