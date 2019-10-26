var pwdPoss = {
  special_chars: ["@", "!", "#", "$", "%", "&", "+", "?", "<", ">", "^", ":", ";", "~"],
  num_chars: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  lower_chars: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper_chars: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
};

var pwdkeys = ["special_chars", "num_chars", "lower_chars", "upper_chars"];

var quPrompt;
var scPrompt;
var ncPrompt;
var lwPrompt;
var upPrompt;

var prompts = {
  quFunc: function() {
    quPrompt = parseInt(prompt("How many characters would you like your password to have?"),10);

    while (Number.isInteger(parseInt(quPrompt)) === false) {
      alert("Your entry is invalid. Please enter a number");
      quPrompt = parseInt(prompt("How many characters would you like your password to have?"),10);
    }},

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

  upFunc: function () {
    upPrompt = prompt("Would you like to have uppercase letters in your password? Enter Y for Yes, and N for No.");
    return upPrompt;
  }

};

prompts.quFunc();

var promptArray = [quPrompt];

console.log(promptArray);

for (var i = 1; i < Object.keys(prompts).length; i++) {

  var sc_nc_lw_up_prompts = Object.keys(prompts)[i];

  var userInput = prompts[sc_nc_lw_up_prompts]();

  promptArray.push(userInput);

  console.log(promptArray);

  while (promptArray[i].toLowerCase() !== "y" && promptArray[i].toLowerCase() !== "n") {

      alert("Invalid Entry. Your entry must be a Y for Yes, or N for No. Please try again.");
      promptArray.pop();
      userInput = prompts[sc_nc_lw_up_prompts]();
      promptArray.push(userInput);

  }

}
