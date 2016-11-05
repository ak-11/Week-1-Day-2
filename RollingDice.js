//Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice. For example, the following is a sample output of the program.
function diceRoll (numberOfRolls) {
  var resultsArray = [];
  for (var counter = 0; counter <= numberOfRolls; counter++)  {
    var diceRollResult = Math.floor((Math.random() * 6) + 1);
    resultsArray.push(diceRollResult);
  }
  var output = resultsArray.join(", ");
  return "Rolled " + numberOfRolls + " dice: " + output + ".";
}
console.log(diceRoll(process.argv[2]));