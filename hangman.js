//Random word is selected and exported
var wordsToGuess = ["Pikachu", "Charmander", "Bulbasaur", "Jinx", "Ponyta", "Charizard", "Raichu", "Zapados", "Magmar", "Bellsprout", "Arbok"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;