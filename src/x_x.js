// Requirements
var colors = require('colors');

// ...
var highlightColors = [ 'red', 'yellow', 'green', 'cyan', 'magenta', 'grey' ];
var eyes = [ '0', 'O', 'x', '-', '^' ];


(function () {
  var timeoutId = undefined;
  var loop = function () {
    displayFace();
    timeoutId = setTimeout(loop, 100);
  };
  loop();
}());



/**
 *
 */
function select (array) {
  return array[ Math.floor(Math.random() * array.length) ];
}

/**
 * Display a Face in Color Ansi on THe Screen
 */
function displayFace () {
  var leftEye = select(eyes), rightEye = select(eyes);
  var highlightColor = select(highlightColors);
  var str = (leftEye + '_' + rightEye)[highlightColor];
  process.stdout.write("\033[s");
  process.stdout.write("\033[4D");
  process.stdout.write(str + ' ');
  process.stdout.write("\033[u");
}
