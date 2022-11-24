/* Load https://api.thecatapi.com/v1/images/search
 * Get the first Array object of the JSON response
 * Load it’s .url
 * Enjoy the kitty 
 */
const request = require('request');

// Allow the user to specify the breed name using command-line arguments.
const catBreed = process.argv[2];
const catURL = `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`;

request(catURL, (error, response, body) => {

const data = JSON.parse(body);
console.log(data);
console.log(typeof data);

});