/**The Goal
 *
 *The goal for your program is to make a motorbike jump across a gap and land on a platform then stop.
 * Rules
 *
 *The platform is located on the otherside of a gap in the road above a chasm. The lengths of the road, gap and platform are measured in cells.
 * Game Input

 Initialization input
 Line 1: road the length of the road before the gap.
 Line 2: gap the length of the gap.
 Line 3: platform the length of the landing platform.
 Input for one game turn
 Line 1: speed the motorbike's speed.
 Line 2: coordX the position on the road of the motorbike.
 Output for one game turn
 A single line containing one of 4 keywords: SPEED SLOW JUMP WAIT .
 Constraints
 The initial position of the motorbike is always coordX = 0.
 0 ≤ speed < 50
 0 ≤ coordX < 100
 1 ≤ road ≤ 100
 1 ≤ gap ≤ 100
 1 ≤ platform ≤ 100
 Response time for one game turn ≤ 150ms
 **/

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var road = parseInt(readline()); // the length of the road before the gap.
var gap = parseInt(readline()); // the length of the gap.
var platform = parseInt(readline()); // the length of the landing platform.

// game loop
while (true) {
  var speed = parseInt(readline()); // the motorbike's speed.
  var coordX = parseInt(readline()); // the position on the road of the motorbike.
  var action = "";  //SPEED, SLOW, JUMP, WAIT


  if (coordX < road - 1) {

    if (speed > gap + 1) {
      action = "SLOW";
    } else {
      if (coordX < (road - (gap + 1)) && speed === gap + 1) {
        action = "WAIT";
      } else {
        action = "SPEED";
      }
    }

  } else if (coordX === road || coordX === road - 1) {
    action = "JUMP";
  } else {
    action = "SLOW";
  }

  // printErr('coordinates: ' + coordX, 'road: ' + road, 'gap' + gap);

  print(action); // A single line containing one of 4 keywords: SPEED, SLOW, JUMP, WAIT.
}
