const fetch = require('node-fetch');

async function fetchGoogleHomePage() {
  const url = 'https://www.google.com';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
}

fetchGoogleHomePage();
