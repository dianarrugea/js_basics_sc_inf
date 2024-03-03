// Exercise 1 - Screenshot 2023-11-01 155320.png
// Cocatenate the following two variables and store it in a fullStack variable.

const frontEnd =['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express','MongoDB']
const fullStack = [frontEnd + ',' + backEnd]

console.log (fullStack)

// Exercise 2 - Screenshot 2023-11-01 155420.png
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log (shoppingCart);

// Step 1: Add "Meat" in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
console.log (shoppingCart);

// Step 2: Add "Sugar" at the end of your shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log (shoppingCart);

// Step Remove 3: "Honey" if you are allergic to honey
var honeyAllergy = 'true';
if (honeyAllergy = true) {
  shoppingCart.splice(4, 1)
}
console.log (shoppingCart);

// Step 4: Modify Tea to "Green Tea"
shoppingCart.splice(3, 1, 'Green Tea')
console.log (shoppingCart);

// Exercise 3 - Screenshot 2023-11-01 155655.png
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring.
// June, July or August, the season is Summer.

userInput = 'November';

if (userInput === 'September' || userInput === 'October' || userInput === 'November') {
    console.log('Autumn');
} else if (userInput === 'December' || userInput === 'January' || userInput === 'February') {
    console.log('Winter');
} else if (userInput === 'March' || userInput === 'April' || userInput === 'May') {
    console.log('Spring');
} else if (userInput === 'June'  || userInput === 'July'  || userInput === 'August') {
    console.log('Summer');
} else {
    console.log('Please input a proper month name');
}

// Exercise 4 - Screenshot 2023-11-01 160130.png
// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
var userInputCyan = 23;
var userInputMagenta = 12;
var userInputYellow = 10;

var inkLevels = {"cyan": 0, "magenta": 0, "yellow": 0};
inkLevels.cyan = userInputCyan;
inkLevels.magenta = userInputMagenta;
inkLevels.yellow = userInputYellow;
var minValue = Math.min(...Object.values(inkLevels));
    console.log('The mininum number of pages the printer can print is: ' + minValue);


