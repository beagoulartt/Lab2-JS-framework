// utilities.js

// Function 1: Display a personalized greeting message
export function greetUser(username, dayPeriod) {
    console.log(`Good ${dayPeriod}, ${username}! Hope you're having a great day.`);
}

// Function 2: Convert kilometers to miles
export function kilometersToMiles(kilometers) {
    const miles = kilometers * 0.621371;
    return miles;
}

// Function 3: Calculate the area of a circle given its radius
export function calculateCircleArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}

// Function 4: Generate a random alphanumeric string of given length
export function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}