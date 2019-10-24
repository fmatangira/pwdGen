var pwdPoss = {
  special_chars: ["@", "!", "#", "$", "%", "&", "+", "?", "<", ">", "^", ":", ";", "~"],
  num_chars: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  lower_chars: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper_chars: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
};

var pwdkeys = ["special_chars", "num_chars", "lower_chars", "upper_chars"];

var scPrompt;
var ncPrompt;
var lwPrompt;
var upPrompt;

var prompts = {
  scFunc: function() {
    scPrompt = parseInt(prompt("How many characters would you like your password to have?"),10);

    while (Number.isInteger(parseInt(scPrompt)) === false) {
      alert("Your entry is invalid. Please enter a number");
      scPrompt = parseInt(prompt("How many characters would you like your password to have?"),10);
    }},

  ncFunc: function() {
    ncPrompt = prompt("Would you like to have numbers in your password? Enter Y for Yes, and N for No.");
  },

  lwFunc: function() {
    lwPrompt = prompt("Would you like to have lowercase letters in your password? Enter Y for Yes, and N for No.");
  },

  upFunc: function () {
    upPrompt = prompt("Would you like to have uppercase letters in your password? Enter Y for Yes, and N for No.");
  }

};

prompts.scFunc();
// prompts.ncFunc();

for (var i = 1; i < Object.keys(prompts).length; i++) {

  var nc_lw_up_prompts = Object.keys(prompts)[i];

  prompts[nc_lw_up_prompts]();

  var promptArray = [scPrompt,ncPrompt,lwPrompt,upPrompt];

    // while (promptArray[i] !== "Y" || promptArray[i] !== "N") {
    //   alert("Invalid Entry.Your entry must be a Y for Yes, or N for No. Please try again.");
    //
    //   // if (promptArray.indexOf(ncPrompt) === 1) {
    //   //   ncPrompt = prompt("Would you like to have numbers in your password? Enter Y for Yes, and N for No.");
    //   // } else if (promptArray.indexOf(lwPrompt) === 2) {
    //   //   lwPrompt = prompt("Would you like to have lowercase letters in your password? Enter Y for Yes, and N for No.");
    //   // } else if (promptArray.indexOf(upPrompt) === 3) {
    //   //   upPrompt = prompt("Would you like to have uppercase letters in your password? Enter Y for Yes, and N for No.");
    //   // }
    // }


}

// console.log(Object.keys(prompts).length);
