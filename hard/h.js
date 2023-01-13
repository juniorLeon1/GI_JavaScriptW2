// HARD: Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using a standard BMI formula:
 
// Store Tom & Jerry’s mass and height as variables.
// Calculate both their BMI’s. w/h^2
// Create a Boolean variable containing information about whether Tom has a higher 
// BMI than Jerry. 
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI 
// higher than Jerry’s? false).

let characters = [
    { /* i = 0 */
    name: "Tom",
    height: 9,
    mass: 8
},
    { /* i = 1 */
    name: "Jerry",
    height: 10,
    mass: 45
}
]

var tomBMI = characters[0].mass / (characters[0].height * characters[0].height); /*.098 --> 0.1 */
var jerryBMI = characters[1].mass / (characters[1].height * characters[1].height); /*.45 */

let tomHasAHigherBMI = new Boolean(tomBMI > jerryBMI);

console.log(`Tom has a higher BMI than Jerry? ${tomHasAHigherBMI}`);