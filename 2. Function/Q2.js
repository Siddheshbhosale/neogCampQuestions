// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

var hexagon = (a) => (3 * Math.sqrt(a)/2)*a*a;
console.log(hexagon(16));