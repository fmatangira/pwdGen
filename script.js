var pwdPoss = {
  special_chars: ["@", "!", "#", "$", "%", "&", "+", "?", "<", ">", "^", ":", ";", "~"],
  num_chars: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  lower_chars: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper_chars: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
};

var pwdkeys = ["special_chars", "num_chars", "lower_chars", "upper_chars"];

var prompts = {
  scPrompt: prompt("How many characters would you like your password to have?"),
  ncPrompt: prompt("Would you like to have numbers in your password? Enter Y for Yes, and N for No."),
  lwPrompt: prompt("Would you like to have lowercase letters in your password? Enter Y for Yes, and N for No."),
  upPrompt: prompt("Would you like to have uppercase letters in your password? Enter Y for Yes, and N for No.")
};
// var ;
// var ;

// console.log(pwdPoss[pwdkeys[0]][1]);
// console.log(parseInt(scPrompt));

function correctInput() {

  while (Number.isInteger(parseInt(prompts.scPrompt)) === false) {
    alert("Your entry is not a number. Please enter a number");
    prompts.scPrompt = parseInt(prompt("How many characters would you like your password to have?"));
  }
}



correctInput();
scPrompt;
