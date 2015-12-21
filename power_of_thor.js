/**
 *  Game Input

 The program must first read the initialization data from the standard input, then, in an infinite loop, provides on the standard output the instructions to move Thor.
 Initialization input
 Line 1: 4 integers lightX lightY initialTX initialTY. (lightX, lightY) indicates the position of the light. (initialTX, initialTY) indicates the initial position of Thor.
 Input for a game round
 Line 1: the number of remaining moves for Thor to reach the light of power: remainingTurns. You can ignore this data but you must read it.
 Output for a game round
 A single line providing the move to be made: N NE E SE S SW W ou NW
 Constraints
 0 ≤ lightX < 40
 0 ≤ lightY < 18
 0 ≤ initialTX < 40
 0 ≤ initialTY < 18
 Response time for a game round ≤ 100ms
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position


var thorX = initialTX;
var thorY = initialTY;
// game loop
while (true) {
  var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

  var directionX = "";
  var directionY = "";

  if (thorX > lightX) {
    directionX = "W";
    thorX -= 1;
  } else if (thorX < lightX) {
    directionX = "E";
    thorX += 1;
  }

  if (thorY > lightY) {
    directionY = "N";
    thorY -= 1;
  } else if (thorY < lightY) {
    directionY = "S";
    thorY += 1;
  }
  // Write an action using print()
  // To debug: printErr('Debug messages...');

  print(directionY + directionX); // A single line providing the move to be made: N NE E SE S SW W or NW
}
