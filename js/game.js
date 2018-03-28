//here's the story all about how you have to play hangman
//there's a list of words
//computer randomly picks a word
//user has to guess the word, one letter at a time
//if user letter is in the word, computer shows them the letter
//if the user types in 7 letters that weren't in the word, they lose
//if they type in a letter that isn't in the word, it's shown on screen
//if the user types in all the letters in the word, they win
//if they type in a letter, they can't type it again
//if they win, wins+1
//if they lose, losses+1

var wordList = ["prototype","betatest"]

var word = wordList[Math.floor(Math.random()*wordList.length)];

console.log(word);

