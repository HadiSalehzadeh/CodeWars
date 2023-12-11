// Write a simple function that takes polar coordinates (an angle in degrees and a radius) and returns the equivalent cartesian coordinates (rounded to 10 places).

// For example:

// coordinates(90,1)
// => (0.0, 1.0)

// coordinates(45, 1)
// => (0.7071067812, 0.7071067812)

function coordinates(degrees, radius) {
  const x = parseFloat((radius * Math.cos(degrees * Math.PI / 180)).toFixed(10));
  const y = parseFloat((radius * Math.sin(degrees * Math.PI / 180)).toFixed(10));
  return [x, y];
}