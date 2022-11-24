const request = require('request');

const catBreed = process.argv[2];
const catURL = `https://api.thecataps.com/v1/breeds/search?q=${catBreed}`;

request(catURL, (error, response, body) => {

  if (error) return console.log(`The request failed: ${error}`);
  
  const data = JSON.parse(body);
  
  const breed = data[0];

  if (breed) console.log(breed.description);
  else console.log(`Are you sure ${catBreed} is correct?`);

});