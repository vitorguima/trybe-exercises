const fetch = require('node-fetch');

function fetchDogs() {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log('failed'))
}


module.exports = { fetchDogs };