//Rules
//
//Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).
//Game Input
//
//Your program must read the data from the standard input and write the result on the standard output.
//  Input
//Line 1: N, the number of temperatures to analyze
//Line 2: The N temperatures expressed as integers ranging from -273 to 5526
//Output
//Display 0 (zero) if no temperatures are provided. Otherwise, display the temperature closest to 0.
//Constraints
//0 ≤ N < 10000


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

// Write an action using print()
// To debug: printErr('Debug messages...');

var result = 0;
temps = temps.split(" ");
var plus = [];
var minus = [];

temps.map(function(num){
  if (num >= 0) {
    plus.push(num)
  } else {
    minus.push(num)
  }
})

var min = Math.min.apply(null, plus);
var max = Math.max.apply(null, minus);

if (min <= max * -1){
  result = min;
} else {
  result = max;
}

if(n === 0){
  result = 0;
}

print(result);
