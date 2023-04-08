const readline = require('readline')
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question("Enter a word: ", (word) => {
    var isPalindrome = true;
    for(i = 0; i < word.length; i++){
        if(word.charAt(i) != word.charAt(word.length - (i + 1))){
            isPalindrome = false
        }
    }
    console.log(isPalindrome)
    rl.close();
})
