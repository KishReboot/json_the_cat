const request = require('request');

const fetchBreedDescription = function(catBreed, callback) {

  const catURL = `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`;

  request(catURL, (error, response, body) => {

    if (error) callback(`The request failed: ${error}`, null);
  
    const data = JSON.parse(body);
  
    const breed = data[0];

    if (breed) callback(null, breed.description);
    else callback(`Are you sure ${catBreed} is correct?`, null);

  });
};

module.exports = { fetchBreedDescription };