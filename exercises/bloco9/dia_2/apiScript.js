// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const getHeader = document.getElementById('jokeContainer');
  
  return new Promise((resolve, reject) => {
  fetch(API_URL, myObject)
  .then((response) => response.json())
  .then((json) => getHeader.innerText = json.joke);
  resolve();
  });
}

window.onload = () => fetchJoke();