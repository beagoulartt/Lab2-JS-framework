// index.js

import { greetUser, kilometersToMiles, calculateCircleArea, generateRandomString } from './utilities.js';

// Invoke Function 1
greetUser('Beatriz', 'morning');

// Invoke Function 2
const miles = kilometersToMiles(5);
console.log(`5 kilometers is equal to ${miles.toFixed(2)} miles.`);

// Invoke Function 3
const area = calculateCircleArea(3);
console.log(`The area of a circle with radius 3 is ${area.toFixed(2)} square units.`);

// Invoke Function 4
const randomString = generateRandomString(10);
console.log(`Generated random string: ${randomString}`);