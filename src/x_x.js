/**
 * I don't know what you'd do with this, but we'll keep it around for old time's sake
 */


// Requirements
var colors = require('colors');

// ...
var highlightColors = [ 'red', 'yellow', 'green', 'cyan', 'magenta', 'grey' ];
var eyes = [ '0', 'O', 'x', '-', '^' ];


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
  console.log(str);
}

exports.x_x = displayFace;
