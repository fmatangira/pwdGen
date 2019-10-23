var pwdPoss = {special_chars: ["@","!","#","$","%","&","+","?","<",">","^",":",";","~"],
                num_chars: ["1","2","3","4","5","6","7","8","9","0"],
                lower_chars: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
                upper_chars: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]};

var pwdkeys = ["special_chars","num_chars","lower_chars","upper_chars"];

console.log(pwdPoss[pwdkeys[0]][1]);
