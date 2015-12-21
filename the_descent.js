/**
 * 	Rules

 Your starship moves along the horizontal axis across 8 cells at an initial height of 10 kilometers. Each cell contains a mountain, some taller than others (from 0 to 9 kilometers).
 The starship circles above all the mountains, going first from left to right, then from right to left, and so on and so forth. With each complete pass, the starship descends one kilometer as it is being drawn to the surface by an unknown force.
 *  Game Input

 Within an infinite loop, read the data from the standard input related to the current state of the landing and send to the standard output the starship firing instructions.
 Input for one game turn
 Line 1: Two integers spaceX and spaceY :
 spaceX is the horizontal coordinate or your starship (in kilometers). It goes from 0 (left of the screen, above first mountain) to 7 (right of the screen above last mountain)
 spaceY is the current altitude of your ship (in kilometers). It goes down from 10 (top of the screen) to 1 (just above ground).
 Next 8 lines: one integer mountainH per line. Each represents the height of one mountain (0 means that the mountain is destroyed). The mountains' heights are provided from left to right.
 Output for one game turn
 A single line with either:
 FIRE: ship is firing below it with its phase cannons. If the cannon already fired during the pass, it has no effect (same as HOLD),
 HOLD: ship is not firing.
 Constraints
 0 ≤ spaceX ≤ 7
 0 < spaceY ≤ 10
 0 ≤ mountainH ≤ 9
 Response time per turn ≤ 100ms
 **/


// game loop
while (true) {
  var inputs = readline().split(' ');
  var spaceX = parseInt(inputs[0]);
  var spaceY = parseInt(inputs[1]);
  var mountains = [];
  for (var i = 0; i < 8; i++) {
    var mountainH = parseInt(readline()); // represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
    mountains.push(mountainH);
  }

  var move = "";
  var highestMountain = Math.max.apply(Math, mountains);

  if (mountains[spaceX] > 0 && mountains[spaceX] === highestMountain) {
    move = "FIRE";
  } else {
    move = "HOLD";
  }

  print(move);
}
